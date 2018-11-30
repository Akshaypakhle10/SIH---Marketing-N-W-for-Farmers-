import HttpService from "./HttpService";


export default class TransportTruckService{


	static getTransportService(url) {
        return HttpService.get(url);
    }
   

    static getTransportServiceType() { return { success: "SuccessGetTruck", fail: "FailGetTruck"}; }



    static getTransportServiceApi(url) {
        return {
            callApi: {
                types:[TransportTruckService.getTransportServiceType().success,TransportTruckService.getTransportServiceType().fail],
                apiCall:TransportTruckService.getTransportService(url)
            }
        };
    }

	static postTransportService(url,data){
		return HttpService.post(url,null,data);
		
	}

	static postTransportServiceType(){
		return{
			success:"successTruck",
			fail:"failTruck"
		}
	}


	static postTransportServiceSignUpApi(url,data){
		return{
			callApi:{
				types:[TransportTruckService.postTransportServiceType().success,TransportTruckService.postTransportServiceType().fail],
				apiCall:TransportTruckService.postTransportService(url,data)
			}
		}
	}

	static postTransportServiceApi(url,data){
		return{
			callApi:{
				types:[TransportTruckService.postTransportServiceType().success,TransportTruckService.postTransportServiceType().fail],
				apiCall:TransportTruckService.postTransportService(url,data)
			}
		}
	}
}