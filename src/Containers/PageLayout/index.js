import React, { Component } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import SearchBar from "../../Components/SearchBar"

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class PageLayout extends Component {
  render() {
    return (
      <div>
        <Header />

      
        <SearchBar/>
        <Footer />
      </div>
    );
  }
}
export default PageLayout;
