
import UtilService from '../Utils/UtilService';
import {REHYDRATE} from 'redux-persist/lib/constants';
import singleProduceService from "../../ApiMiddleware/api/singleProduceService";


const initialState = {
    crop:{}
 
};

const handlers = {
    //string property value
    [singleProduceService.postServiceReturn().success]: (initialState,action) => ({
    	...initialState,
    	crop:action.response.data
        
       // set state
    }),
    [singleProduceService.postServiceReturn().fail]:(initialState,action) =>({
        ...initialState,
        crop:false
    }),
    [REHYDRATE]: (state, action) => ({
        // set state
     }),
};

export default function singleProduceReducer(state = initialState, action) {
    return UtilService.actionHandlers(state, action, handlers);
}