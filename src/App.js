import React from "react";
import Home from "./pages/Home";
import Report from "./pages/Report";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/report" exact component={Report} />
        <Route path="/about" exact component={AboutUs} />
      </BrowserRouter>
    </div>
  );
};
export default App;
