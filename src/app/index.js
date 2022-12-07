import React, { Component} from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { RecoilRoot } from 'recoil';



import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
  );


// ReactDOM.render (

// <React.StrictMode>
// <RecoilRoot>
//   <App />
// </RecoilRoot>
// </React.StrictMode>,

// document.getElementById("app"))