import UtilService from '../Utils/UtilService';
import {REHYDRATE} from 'redux-persist/lib/constants';
import cropService from "../../ApiMiddleware/api/cropService";


const initialState = {
 items:[]
};

const handlers = {
    //string property value
    [cropService.postServiceReturn().success]: (initialState,action) => ({
    	...initialState,
    	items:action.response.data
       // set state
    }),
    [REHYDRATE]: (state, action) => ({
        // set state
     }),
};

export default function cropReducer(state = initialState, action) {
    return UtilService.actionHandlers(state, action, handlers);
}