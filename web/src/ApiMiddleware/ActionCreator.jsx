/**
 * responsible for creating action object
 * @type {string}
 */
export const CALL_API = 'callApi';

export default store => {
    return next => {
        return action => {
            const callAPI = action[CALL_API];
            if (typeof callAPI === 'undefined') {
                return next(action);
            }

            let {apiCall} = callAPI;
            const {types} = callAPI;

            if (typeof apiCall === 'function') {
                throw new Error('apiCall expects asyncFunction.' +store);
            }

            if (!types.every(type => typeof type === 'string')) {
                throw new Error('Expected action types to be strings.');
            }

            const actionWith = data => {
                const finalAction = Object.assign({}, data);
                return finalAction;
            };

            const [successType, failureType] = types;

            return apiCall.then(
                response => next(actionWith({
                    response,
                    type: successType
                })),
                error => {
                    return next(actionWith({
                        type: failureType,
                        error: error.response.data || 'Error occured.'
                    }));
                }
            );
        };
    };
};