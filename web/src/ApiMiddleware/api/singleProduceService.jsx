import HttpService from './HttpService';

// class for for any fuctionality's service (for now name is for understanding) 
export default class singleProduceService {

   
    static postService(url,data){
        return HttpService.post(url,null,data);
    } 


    static postServiceApi(url,data){
        return {
            callApi:{
                types:[singleProduceService.postServiceReturn().success,singleProduceService.postServiceReturn().fail],
                apiCall:singleProduceService.postService(url,data)
            }
        }
    }
     static postServiceApiTruck(url,data){
        return {
            callApi:{
                types:[singleProduceService.postServiceTruckReturn().success,singleProduceService.postServiceTruckReturn().fail],
                apiCall:singleProduceService.postService(url,data)
            }
        }
    }
    static postServiceReturn(){
        return {
            success:'sucessful return',
            fail:'failure  return'
        }
    }
    static postServiceTruckReturn(){
        return {
            success:'sucessful Truck return',
            fail:'failure Truck return'
        }
    }

}