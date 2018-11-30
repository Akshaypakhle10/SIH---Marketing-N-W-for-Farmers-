import HttpService from "./HttpService";


export default class TransportAuthService{

    static getTransportService(url) {
        return HttpService.get(url);
    }
   

    static getTransportServiceType() { return { success: "SuccessTransport", error: "FailTransport"}; }



    static getTransportServiceApi(url) {
        return {
            callApi: {
                types:[TransportAuthService.getTransportServiceType().success,TransportAuthService.getTransportServiceType().fail],
                apiCall:TransportAuthService.getTransportService(url)
            }
        };
    }


	static postTransportService(url,data){
		return HttpService.post(url,null,data);
		
	}

	static postTransportServiceType(){
		return{
			success:"successTransportSignUp",
			fail:"failTransportSignUp"
		}
	}


	static postTransportServiceSignUpApi(url,data){
		return{
			callApi:{
				types:[TransportAuthService.postTransportServiceType().success,TransportAuthService.postTransportServiceType().fail],
				apiCall:TransportAuthService.postTransportService(url,data)
			}
		}
	}

	static postTransportServiceApi(url,data){
		return{
			callApi:{
				types:[TransportAuthService.postTransportServiceType().success,TransportAuthService.postTransportServiceType().fail],
				apiCall:TransportAuthService.postTransportService(url,data)
			}
		}
	}
}