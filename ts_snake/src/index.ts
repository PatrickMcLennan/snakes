import { createElement } from "react";
import ReactDOM from "react-dom";

import App from "./App";
const ROOT: HTMLDivElement = document.querySelector(`#root`);

ReactDOM.render(createElement(App), ROOT);
