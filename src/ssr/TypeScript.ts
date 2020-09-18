import { fs } from "memfs";
import webpack from "webpack";
import { join } from "path";

export async function compile(path: string) {
  function readFileAsync(path: string) {
    return new Promise<string>((ok, ng) => fs.readFile(path, (err, data) => (err?ng(err):ok(data.toString("utf-8")))));
  }
  const compiler = webpack({
    entry: path,
    output: {
      path: "/",
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader", options: { onlyCompileBundledFiles: true } }
      ]
    }
  });

  const { mkdir, mkdirp, rmdir, unlink, writeFile } = fs;
  compiler.outputFileSystem = { mkdir, mkdirp, rmdir, unlink, writeFile, join };
  return new Promise<string>((ok, ng) =>
    compiler.run((err) => err? ng(err): readFileAsync(`/bundle.js`).then(ok, ng)))
}
