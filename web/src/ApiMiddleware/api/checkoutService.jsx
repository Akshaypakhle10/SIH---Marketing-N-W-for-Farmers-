import HttpService from './HttpService';

// class for for any fuctionality's service (for now name is for understanding) 
export default class checkoutService {

   

    static postService(url,data){
        return HttpService.post(url,null,data);
    } 


    static postServiceApi(url,data){
        return {
            callApi:{
                types:[checkoutService.postServiceReturn().success,checkoutService.postServiceReturn().fail],
                apiCall:checkoutService.postService(url,data)
            }
        }
    }
    static postServiceReturn(){
        return {
            success:'succesful checkout',
            fail:'failed checkout'
        }
    }

}