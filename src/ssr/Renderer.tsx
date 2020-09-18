import React, { FC } from "react";
import { renderToString } from "react-dom/server";
import { compile } from "./TypeScript";

export async function renderComponent(Component: FC, path: string) {
  const code = await compile(path);
  return (`
<html>
  <body>
  <div id="app">${renderToString(<Component />)}</div>
  </body>
  <script>${code}</script>
</html>
`);
}
