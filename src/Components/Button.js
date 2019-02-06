import React, { Component, Fragment } from "react";

class Button extends Component {
  render() {
    return (
      <Fragment>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type={this.props.type}
          onClick=""
        >
          {this.props.text} 
        </button>
      </Fragment>
    );
  }
}
export default Button;
