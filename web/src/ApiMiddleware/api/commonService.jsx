import HttpService from './HttpService';

// class for for any fuctionality's service (for now name is for understanding) 
export default class CommonService {

    static getService() {
        return HttpService.get(
            // get call
        );
    }
    // thses are type text to be handled in action dispatch 
    static getServiceReturn() { return { success: "SuccessText", error: "FailText", unload: "unload text if any else ignore" }; }

    // this sould be called from outside 
    static getServiceApi() {
        return {
            callApi: {
                types: [CommonService.getServiceReturn().success, CommonService.getServiceReturn().error],
                apiCall: CommonService.getService()
            }
        };
    }

    // this call will only be in case when we need to clear particular reducers
    static getServiceUnload() {
        return (dispatch) => {
            dispatch({ type: CommonService.getServiceReturn().unload });
        };
    }

}