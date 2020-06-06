import { createElement } from "react";
import ReactDOM from "react-dom";

import App from "./App";
const ROOT: HTMLDivElement = document.querySelector(`#root`);

console.log(`index.ts`);

ReactDOM.render(createElement(App), ROOT);
