
import UtilService from '../Utils/UtilService';
import {REHYDRATE} from 'redux-persist/lib/constants';
import orderProduceService from "../../ApiMiddleware/api/orderProduceService";


const initialState = {
order:{}
};

const handlers = {
    //string property value
    [orderProduceService.postServiceReturn().success]: (initialState,action) => ({
    	...initialState,
    	order:action.response.data
       // set state
    }),
    [REHYDRATE]: (state, action) => ({
        // set state
     }),
};

export default function orderReducer(state = initialState, action) {
    return UtilService.actionHandlers(state, action, handlers);
}