
import UtilService from '../Utils/UtilService';
import {REHYDRATE} from 'redux-persist/lib/constants';
import singleProduceService from "../../ApiMiddleware/api/singleProduceService";


const initialState = {
    noTruckFound:false,
    data:{}
 
};

const handlers = {
    //string property value
    [singleProduceService.postServiceTruckReturn().success]: (initialState,action) => ({
    	...initialState,
    	data:action.response.data
        
       // set state
    }),
    [singleProduceService.postServiceTruckReturn().fail]: (initialState,action) => ({
        ...initialState,
        noTruckFound:true
        
       // set state
    }),
    [REHYDRATE]: (state, action) => ({
        // set state
     }),
};

export default function singleTruckReducer(state = initialState, action) {
    return UtilService.actionHandlers(state, action, handlers);
}