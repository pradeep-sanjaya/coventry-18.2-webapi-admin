import React from 'react';

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
                <h1>Product</h1>
            </div>
        );
    }
}

export default Product;