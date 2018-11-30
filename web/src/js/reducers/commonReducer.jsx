
import UtilService from '../Utils/UtilService';
import {REHYDRATE} from 'redux-persist/lib/constants';

const initialState = {
// initial state
};

const handlers = {
    //string property value
    ['test']: () => ({
       // set state
    }),
    [REHYDRATE]: (state, action) => ({
        // set state
     }),
};

export default function commonReducer(state = initialState, action) {
    return UtilService.actionHandlers(state, action, handlers);
}