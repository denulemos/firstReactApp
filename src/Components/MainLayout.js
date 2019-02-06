import React, { Component } from "react";
import SearchBar from './SearchBar';
class MainLayout extends Component {
  render() {
    return (
    <div className="d-flex flex-column h-100">
    <SearchBar/>
     </div>
     );
  }
}
export default MainLayout;
