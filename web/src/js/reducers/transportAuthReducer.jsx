import UtilService from '../Utils/UtilService';
import {REHYDRATE} from 'redux-persist/lib/constants';
import TransportAuthService from "../../ApiMiddleware/api/transportAuthService";


const initialState = {
 user:{},
 loggedIn:false

};

const handlers = {
    //string property value
    [TransportAuthService.postTransportServiceType().success]: (initialState,action) => ({
    	...initialState,
    	user:action.response.data,
    	loggedIn:true
       // set state
    }),
    [TransportAuthService.postTransportServiceType().fail]:(initialState,action)=>({
    	...initialState,
    	loggedIn:false,
    	user:{}

    }),
    [REHYDRATE]: (state, action) => ({
        // set state
     }),
};

export default function transportAuthReducer(state = initialState, action) {
    return UtilService.actionHandlers(state, action, handlers);
}