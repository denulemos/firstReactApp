import React, {Component, Fragment} from "react";

class InputText extends Component{

render(){
  console.log(this.props.onChange)
    return(

        <Fragment>
            <input
            className="form-control"
            type="text"
            placeholder = {this.props.placeholder}
            aria-label="search"
            onChange={this.props.onChange}
            
           
            />
        </Fragment>
    );
}
}
export default InputText;

