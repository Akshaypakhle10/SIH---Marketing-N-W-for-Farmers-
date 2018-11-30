
import UtilService from '../Utils/UtilService';
import {REHYDRATE} from 'redux-persist/lib/constants';
import produceService from "../../ApiMiddleware/api/produceService";


const initialState = {
 items:[]
};

const handlers = {
    //string property value
    [produceService.getServiceReturn().success]: (initialState,action) => ({
    	...initialState,
    	items:action.response.data
       // set state
    }),
    [REHYDRATE]: (state, action) => ({
        // set state
     }),
};

export default function itemReducer(state = initialState, action) {
    return UtilService.actionHandlers(state, action, handlers);
}