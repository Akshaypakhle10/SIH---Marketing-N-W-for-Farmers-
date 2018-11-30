import HttpService from './HttpService';

// class for for any fuctionality's service (for now name is for understanding) 
export default class produceService {

    static getService(url) {
        return HttpService.get(url);
    }
    // thses are type text to be handled in action dispatch 
    static getServiceReturn() { return { success: "SuccessText", error: "FailText", unload: "unload text if any else ignore" }; }

    // this sould be called from outside 
    static getServiceApi(url) {
        return {
            callApi: {
                types: [produceService.getServiceReturn().success, produceService.getServiceReturn().error],
                apiCall: produceService.getService(url)
            }
        };
    }

    // this call will only be in case when we need to clear particular reducers
    static getServiceUnload() {
        return (dispatch) => {
            dispatch({ type: produceService.getServiceReturn().unload });
        };
    }

    static postService(url,data){
        return HttpService.post(url,null,data);
    } 


    static postServiceApi(url,data){
        return {
            callApi:{
                types:[produceService.postServiceReturn().success,produceService.postServiceReturn().fail],
                apiCall:produceService.postService(url,data)
            }
        }
    }
    static postServiceReturn(){
        return {
            success:'SuccessText',
            fail:'failText'
        }
    }

}