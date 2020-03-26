import React from 'react';

class ProductsPage extends React.Component {

    componentDidMount() {
        //this.props.dispatch(userActions.getAll());
    }
    componentWillMount() {
        this.props.dispatch
    }

    render() {

        return (
            <div>
                <h1>Products</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

export default ProductsPage;