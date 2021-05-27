import React, {Component} from 'react';
import Products from '../component/Home/Products';
import {connect} from 'react-redux';
import {products} from '../actions';
import PropTypes from 'prop-types';

class Home extends Component{
   
    componentDidMount(){
        this.props.dispatch(products());
    }

    render(){
        let sample = this.props.productdata.products
        console.log("This is sample data");
        console.log(sample);
        return(
            <div>
                <Products prodata ={this.props.productdata.product} />                
            </div>
        );
    }
}

function mapStateToprops(state){
    console.log("This is the state");
    console.log(state)
    return{
        productdata: state.product        
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}
export default connect(mapStateToprops)(Home);