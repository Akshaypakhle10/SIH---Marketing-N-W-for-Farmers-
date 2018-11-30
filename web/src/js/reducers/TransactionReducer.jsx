 
import UtilService from '../Utils/UtilService';
import {REHYDRATE} from 'redux-persist/lib/constants';
import getOrderService from "../../ApiMiddleware/api/getOrderService";


const initialState = {
    data:{}
// initial state
};

const handlers = {
    //string property value
    [getOrderService.getServiceReturn().success]: (initialState,action) => ({
    	...initialState,
    	data:action.response.data
       // set state
    }),
    [REHYDRATE]: (state, action) => ({
        // set state
     }),
};

export default function TransactionReducer(state = initialState, action) {
    return UtilService.actionHandlers(state, action, handlers);
}