import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { alertActions, userActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;

        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert, user } = this.props;
        return (
            <Router history={history}>
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link to="/" className="navbar-brand">Clothing - Admin</Link>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="#">Home</a></li>
                                    <li><Link to="/">Products</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    {this.props.user ?
                                        <li><Link to="/login">Logout</Link></li>
                                        : null
                                    }

                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div className="jumbotron">
                        <div className="container">
                            <div className="col-sm-8 col-sm-offset-2">
                                {alert.message &&
                                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                                }

                                <div>
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <Route path="/login" component={LoginPage} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Router>

        );
    }
}

function mapStateToProps(state) {
    const { alert, authentication } = state;
    const { user } = authentication;
    return {
        user,
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 