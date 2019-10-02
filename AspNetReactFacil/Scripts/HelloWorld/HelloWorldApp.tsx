import * as React from "react";
import * as ReactDOM from "react-dom";
import { HelloWorld } from './HelloWorld';
import { sharedFunction } from "../shared/sharedmodule";

sharedFunction();


ReactDOM.render(<HelloWorld show={true} />, document.getElementById('aquireact'));
