import { combineReducers } from 'redux';
import commonReducer from './commonReducer'
import itemReducer from './itemReducer'
import cropReducer from './cropReducer'
import authReducer from './authReducer'
import singleProduceReducer from './singleItemReducer'
import singleTruckReducer from './singleTruckReducer'
import orderReducer from './orderReducer'
import checkoutReducer from './checkoutReducer'
import transportAuthReducer from './transportAuthReducer'
import transportTruckRequestReducer from './transportTruckRequestReducer'
import TransactionReducer from './TransactionReducer'








// import all required reducers and use it in method

const combineStore = combineReducers({
    commonReducer,
    itemReducer,
    authReducer,
    singleProduceReducer,
    singleTruckReducer,
    orderReducer,
    checkoutReducer,
    transportAuthReducer,
    transportTruckRequestReducer,
    TransactionReducer,
    cropReducer,
  // imported reducers
});


export default combineStore;		