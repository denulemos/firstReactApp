import InputText from "./InputText";
import Button from "./Button";
import React, {Component, Fragment} from "react";
import Container from "./Container";

class SearchBar extends Component{

    constructor (props){
        super(props);
        this.state = {
            productos: [],
            search: ""
        }
    }

    
searchProduct=()=>{
    let search = this.state.search;

    fetch(
    `https://api.mercadolibre.com/sites/MLU/search?q=${search}&limit=10`

    )

    .then(response => response.json())
    .then(productos =>{
        this.setState({
            productos: productos.results
        });
    }); 
}
componentDidMount(){
this.searchProduct();
}
onInput = e => {
    this.setState({
        search: e.target.value
    }); 
    console.log("hola")
}
render(){
    return(
        <Fragment>
            <div className="col-4 mx-auto mt-4 d-flex justify-content-center">
            <InputText placeholder="Buscar producto" onChange={this.onInput} />
            <Button text="Buscar" onClick={this.searchProduct} />
           
            </div>
             <Container products = {this.state.productos}/>
        </Fragment>
    );
}
} 
export default SearchBar;




