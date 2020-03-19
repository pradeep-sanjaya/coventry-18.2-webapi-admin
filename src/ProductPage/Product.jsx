import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { productActions } from '../actions';

class Product extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.dispatch(userActions.getAll());
    }

    render() {
        
        return (
            <div>
                <div style={{ display: "flex" }}>
                    <div className="card" style={{ width: "18em", margin: "15px" }}>
                        <img className="card-img-top" src={this.props.product.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.product.name}</h5>
                            {this.props.product.isAvailable ?
                                (<a href="!#" className="badge badge-primary">In stock</a>)
                                :
                                (<a href="!#" className="badge badge-warning">Out of stock</a>)
                            }

                            <h5>Rs.{this.props.product.price}.00</h5>

                            <p className="card-text">
                                Some quick example text to build on the card title and make up
								the bulk of the card's content.
                            </p>

                            <div className="text-center">
                                <button className="btn btn-primary" onClick={this.onAddToCart}>
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

const connectedProducts = connect(mapStateToProps)(Product);
export { connectedProducts as Product }