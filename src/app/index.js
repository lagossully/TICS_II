import React, { Component} from "react";
import { render } from "react-dom";
import App from "./app";

import { RecoilRoot } from 'recoil';



render (

<React.StrictMode>
<RecoilRoot>
  <App />
</RecoilRoot>
</React.StrictMode>,

document.getElementById("app"))