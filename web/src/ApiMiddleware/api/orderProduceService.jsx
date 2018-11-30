import HttpService from './HttpService';

// class for for any fuctionality's service (for now name is for understanding) 
export default class orderProduceService {

   

    static postService(url,data){
        return HttpService.post(url,null,data);
    } 


    static postServiceApi(url,data){
        return {
            callApi:{
                types:[orderProduceService.postServiceReturn().success,orderProduceService.postServiceReturn().fail],
                apiCall:orderProduceService.postService(url,data)
            }
        }
    }
    static postServiceReturn(){
        return {
            success:'succesful order',
            fail:'failed order'
        }
    }

}