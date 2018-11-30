import HttpService from './HttpService';

// class for for any fuctionality's service (for now name is for understanding) 
export default class getOrderService {

    static getService(url) {
        return HttpService.get(url);
    }
    // thses are type text to be handled in action dispatch 
    static getServiceReturn() { return { success: "SuccessOrderText", error: "FailureOrderText", unload: "unload text if any else ignore" }; }

    // this sould be called from outside 
    static getServiceApi(url) {
        return {
            callApi: {
                types: [getOrderService.getServiceReturn().success, getOrderService.getServiceReturn().error],
                apiCall: getOrderService.getService(url)
            }
        };
    }

   

}