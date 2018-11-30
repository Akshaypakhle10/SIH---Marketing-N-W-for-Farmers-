
import UtilService from '../Utils/UtilService';
import {REHYDRATE} from 'redux-persist/lib/constants';
import orderProduceService from "../../ApiMiddleware/api/orderProduceService";


const initialState = {
order:{},
failed_order:false
};

const handlers = {
    //string property value
    [orderProduceService.postServiceReturn().success]: (initialState,action) => ({
    	...initialState,
    	order:action.response.data
       // set state
    }),
     [orderProduceService.postServiceReturn().fail]: (initialState,action) => ({
    	...initialState,
    	order:action.response.data,
    	failed_order:true
       // set state
    }),
    [REHYDRATE]: (state, action) => ({
        // set state
     }),
};

export default function checkoutReducer(state = initialState, action) {
    return UtilService.actionHandlers(state, action, handlers);
}