import React, { Component } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import Button from "../../Components/Button";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class PageLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button buttonType="submit" text="Buscar" />
        <Footer />
      </div>
    );
  }
}
export default PageLayout;
