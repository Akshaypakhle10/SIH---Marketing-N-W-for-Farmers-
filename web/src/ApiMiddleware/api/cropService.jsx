import HttpService from './HttpService';

// class for for any fuctionality's service (for now name is for understanding) 
export default class cropService {

    static getService(url) {
        return HttpService.get(url);
    }
    // thses are type text to be handled in action dispatch 
    static getServiceReturn() { return { success: "SuccessTextcrop", error: "FailTextcrop", unload: "unload text if any else ignore crop" }; }

    // this sould be called from outside 
    static getServiceApi(url) {
        return {
            callApi: {
                types: [cropService.getServiceReturn().success, cropService.getServiceReturn().error],
                apiCall: cropService.getService(url)
            }
        };
    }

    // this call will only be in case when we need to clear particular reducers
    static getServiceUnload() {
        return (dispatch) => {
            dispatch({ type: cropService.getServiceReturn().unload });
        };
    }

    static postService(url,data){
        return HttpService.post(url,null,data);
    } 


    static postServiceApi(url,data){
        return {
            callApi:{
                types:[cropService.postServiceReturn().success,cropService.postServiceReturn().fail],
                apiCall:cropService.postService(url,data)
            }
        }
    }
    static postServiceReturn(){
        return {
            success:'SuccessTextCrop',
            fail:'failTextCrop'
        }
    }

}