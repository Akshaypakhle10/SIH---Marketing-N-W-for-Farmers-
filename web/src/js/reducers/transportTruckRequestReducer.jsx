import UtilService from '../Utils/UtilService';
import {REHYDRATE} from 'redux-persist/lib/constants';
import TransportTruckService from "../../ApiMiddleware/api/transportTruckService";


const initialState = {
data:{}
};

const handlers = {
    //string property value
    [TransportTruckService.getTransportServiceType().success]: (initialState,action) => ({
    	...initialState,
    	data:action.response.data
       // set state
    }),
    [REHYDRATE]: (state, action) => ({
        // set state
     }),
};

export default function transportTruckRequestReducer(state = initialState, action) {
    return UtilService.actionHandlers(state, action, handlers);
}