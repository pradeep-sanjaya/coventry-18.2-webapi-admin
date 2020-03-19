import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { products } from './products.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    alert,
    products
});

export default rootReducer;