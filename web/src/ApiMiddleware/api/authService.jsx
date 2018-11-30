import HttpService from './HttpService';

// class for for any fuctionality's service (for now name is for understanding) 
export default class authService {

    static getService(url) {
        return HttpService.get(url);
    }
    // thses are type text to be handled in action dispatch 
    static getServiceReturn() { return { success: "SuccessText", error: "FailText", unload: "unload text if any else ignore" }; }

    // this sould be called from outside 
    static getServiceApi(url) {
        return {
            callApi: {
                types: [authService.getServiceReturn().success, authService.getServiceReturn().error],
                apiCall: authService.getService(url)
            }
        };
    }

    // this call will only be in case when we need to clear particular reducers
    static getServiceUnload() {
        return (dispatch) => {
            dispatch({ type: authService.getServiceReturn().unload });
        };
    }

    static postService(url,data){
        return HttpService.post(url,null,data);
    }


    static postServiceSignupApi(url,data){
        return {
            callApi:{
                types:[authService.postServiceSignupReturn().success,authService.postServiceSignupReturn().fail],
                apiCall:authService.postService(url,data)
            }
        }
    }
    static postServiceSignupReturn(){
        return {
            success:'SuccessSignup',
            fail:'failSignup'
        }
    }
    static postServiceApi(url,data){
        return {
            callApi:{
                types:[authService.postServiceReturn().success,authService.postServiceReturn().fail],
                apiCall:authService.postService(url,data)
            }
        }
    }
    static postServiceReturn(){
        return {
            success:'Success',
            fail:'fail'
        }
    }

}