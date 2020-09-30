import React, { FC } from "react";
import { renderToString } from "react-dom/server";
import { compile } from "./TypeScript";

export async function renderDocument<T>(Component: FC<T>, props: T, path: string) {
  const code = await compile(path);
  return (`
<html>
  <body>
  <div id="app">${renderToString(<Component {...props} />)}</div>
  </body>
  <script>${code}</script>
</html>
`);
}
