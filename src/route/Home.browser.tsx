import React from "react";
import { hydrate } from "react-dom";
import { Home } from "../components/Home";

hydrate(<Home text="bar" />, document.getElementById("app"));
