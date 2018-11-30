
import UtilService from '../Utils/UtilService';
import {REHYDRATE} from 'redux-persist/lib/constants';
import authService from "../../ApiMiddleware/api/authService";


const initialState = {
 user:{},
 loggedIn:false

};

const handlers = {
    //string property value
    [authService.postServiceReturn().success]: (initialState,action) => ({
    	...initialState,
    	user:action.response.data,
    	loggedIn:true
       // set state
    }),
    [authService.postServiceReturn().fail]:(initialState,action)=>({
    	...initialState,
    	loggedIn:false,
    	user:{}

    }),
    [REHYDRATE]: (state, action) => ({
        // set state
     }),
};

export default function authReducer(state = initialState, action) {
    return UtilService.actionHandlers(state, action, handlers);
}