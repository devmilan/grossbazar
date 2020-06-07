import React from 'react';
import { hydrate, render } from "react-dom";
import { BrowserRouter} from 'react-router-dom'
import './assets/scss/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<BrowserRouter><App /></BrowserRouter>, rootElement);
} else {
  render(<BrowserRouter><App /></BrowserRouter>, rootElement);
}

serviceWorker.register();
