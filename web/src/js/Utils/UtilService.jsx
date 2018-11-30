

export default class UtilService {

    static actionHandlers(state, action, handlers) {
        let handler = handlers[action.type];
        if (!handler) return state;
        return {...state, ...handler(state, action)};
    }

    // new methods to get added 
}