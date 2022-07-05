import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Main from "../routes/Routes";

const Layout = () => {
  return (
    <BrowserRouter>
    {/* <Route render={}></Route> */}
      <div>
        <div className="container">
          <Header />
          <div className="main">
            <Main />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
