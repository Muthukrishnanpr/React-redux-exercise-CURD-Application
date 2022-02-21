import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import App from "./App.js"
import { Provider } from "react-redux";
import { store } from "./store.js";



ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>
    , document.getElementById("root")
)