import React from "react";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
const App = () => {
  return (
    <div className="home">
      {/* links url with component */}
      <BrowserRouter>
        {/* matches url and renders given component */}
        <Routes>
          {/* make signUp as default route */}
          {/* route attaches the url to the component */}
          <Route path="/" Component={SignUp} />
          {/* signup route */}
          <Route path="/signup" Component={SignUp} />
          {/* home route */}
          <Route path="/home" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
