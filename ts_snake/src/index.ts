import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

const ROOT: HTMLDivElement = document.querySelector(`#root`);

ReactDOM.render(React.createElement(App), ROOT);
