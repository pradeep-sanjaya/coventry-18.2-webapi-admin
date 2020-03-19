import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { productActions } from '../actions';
import Product from "./Product";
import productService from '../services/product.service'

class ProductsPage extends React.Component {

    componentDidMount() {
        //this.props.dispatch(userActions.getAll());
    }
    componentWillMount(){
        this.props.dispatch
    }

    render() {

        return (
            <div className="col-md-12">
                <h1>absdjhas</h1>
                <div style={{ display: "flex" }}>
                    {this.props.products.map((product, key) => {
                        return (
                            <div key={key}>
                                <Product product={product} />;
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

const connectedProducts = connect(mapStateToProps)(ProductsPage);
export { connectedProducts as ProductsPage}