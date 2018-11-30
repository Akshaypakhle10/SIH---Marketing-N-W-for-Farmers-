import React  from "react";
import {Component} from "react";
import {Link} from "react-router-dom"
import {Redirect} from "react-router-dom"
import { connect } from "react-redux";
import singleProduceService from "../../ApiMiddleware/api/singleProduceService"
import orderProduceService from "../../ApiMiddleware/api/orderProduceService";
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "../../css/global.css";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';







class singleProduce extends Component {
   	constructor(props){
   		super(props);
   		console.log(props.match)
   		this.showNotif=this.showNotif.bind(this);
   		this.props.dispatch(singleProduceService.postServiceApi(`/merchantProtected/product/${props.match.params.cropId}`,{quantity:this.props.match.params.quantity}))
   		.then(()=>{
   			let postData ={
   				location:this.props.state.crop.farmerinfo.district,
   				quantity:this.props.state.crop.productinfo.quantity
   		}
      console.log(postData)
   		this.props.dispatch(singleProduceService.postServiceApiTruck(`/order/findTruck`,postData));
   		
   		})


   		
   		this.state={
   			farmerinfo:{
   				address:"null",
   				district:"null",

   			},
   			cropInfo:{},
   			productinfo:{},
   			redirectToPayment:false,
        redirectToOrders:false

   		}
       var elem = document.querySelector('.collapsible');
        var instance = M.Collapsible.init(elem);
   	}

    showNotif(ev){
      this.setState({
        redirectToOrders:true
      });
      console.log(this.state.redirectToOrders)
    }
   
   	onBuyButtonClick = (ev) =>{
   		let productData = this.props.state.crop;
   		let truckId = this.props.truck.data._id
   		console.log(truckId)
   		productData.transportInfo.truckId = truckId;
   		console.log(productData)
   		this.props.dispatch(orderProduceService.postServiceApi(`/order/create`,productData))
   		
   	}
    shareTruckButton= (ev)=>{

    }
   	
  

   
     render() {
     if(this.state.redirectToPayment){
       return <Redirect to="/product/crop/buy" />
   }
   if(this.state.redirectToOrders){
      alert("You will be notified in 3 days")
          return <Redirect to="/myOrders/buyer"/>
   }
 
 
      console.log(this.props.state.crop)
      let {farmerinfo ,costInfo,productinfo,transportInfo} = this.props.state.crop;
         return(

          //<div className
          // <div className="section no-pad-bot singleProduce row">
          //   <div className="col s5 m5">
          //     <div className="row">
          //       <div className="farmerInfo section no-pad-bot">
          //         <div className="row">
          //           <div className="col">
          //             <h1>farmer Info</h1>
          //           </div>
          //         </div>
                  
          //         <div className="row">
          //           <div className="col">
          //             <p>Address:   {farmerinfo && farmerinfo.address}</p>
          //           </div>
          //         </div>
          //         <div className="row">
          //           <div className="col">
          //             <p>mobile:{farmerinfo && farmerinfo.mobile}</p>
          //           </div>
          //         </div>
                  
                  
                  
                  
 
          //       </div>
          //     </div>
          //     <div className="row">
          //       <div className="farmerInfo section no-pad-bot">
          //         <div className="row">
          //           <div className="col">
          //             <h1>produce Info</h1>
          //           </div>
          //         </div>
          //         <div className="row">
          //           <div className="col">
          //             <p>crop Name:{productinfo && productinfo.name}</p>
          //           </div>
          //         </div>
          //         <div className="row">
          //           <div className="col">
          //             <p>crop type:{productinfo && productinfo.type}</p>
          //           </div>
          //         </div>
          //         <div className="row">
          //           <div className="col">
          //             <p>quantity:{productinfo && productinfo.quantity}</p>
          //           </div>
          //         </div>
                  
 
          //       </div>
          //     </div>
          //   </div>
 
          //   <div className="col s6 m6">
          //       <div className="farmerInfo section no-pad-bot">
          //         <h1>price prediction</h1>
          //         <p>crop cost: {costInfo && costInfo.crop}</p>
          //         <p>transport cost: {costInfo && costInfo.transport}</p>
          //         <p>total :{costInfo && costInfo.total}</p>
 
          //         <div className=" row">
          //         <div className="col s6">
          //           <button className="btn btn-waves">share</button>
          //         </div>


          //         <div className="col s6">
          //         <Link to="/product/crop/buy"><button className="btn btn-waves" >buy</button></Link>
          //       </div>  
          //       </div>
                  
 
          //   </div>   
                
          //   </div>
              
 
            
          // </div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="singleProduce no-pad bot" >
           <div className="row" style={{"background":"white"}}>
                <div className="col" style={{"padding":"5% 5% 5% 5%"}}>
                  
                  <img src="http://localhost:8080/images/rice.jpg" style={{"height":"400px","width":"400px","border":"2px"}} id="myPic"/>
                  <div className="bow" style={{"background":"#E0E0E0" ,"height":"130px","paddingLeft":"4%"}}>
                  <br/>
                  <label style={{"color":"#757575"}}>*Orders are grouped every three days a week</label>
                  <br/>
                  <br/>
                  <Link to="/myOrders/buyer"><button className="btn btn-waves" onClick={this.shareTruckButton} style={{"background":"#00C853","position":"absolute","bottom":"11px"}}>Share Truck</button></Link>    

                  </div>
                </div>

                

                <ul className="col s6" style={{"background":"#E0E0E0","paddingTop":"1%","marginRight":"5%","marginTop":"5%","width":"45%"}} id="myUl">
                    <p style={{ "marginLeft":"20%"}}><h5>Order info</h5></p>
                    <div className="divider" style={{"background":"#424242"}}></div>
                    <li>   
                      <p><b>Crop :</b> {productinfo && productinfo.name}</p>
                                                            
                      <p><b>Type: </b>{productinfo && productinfo.type}</p>
                                                      
                      <p><b>Quantity:</b> {productinfo && productinfo.quantity}</p>
                        
                    </li>

                    <div className="divider" style={{"background":"#424242"}}></div>

                    <li>
                             
                      <p><b>Address:</b> {farmerinfo && farmerinfo.address}</p>
                      
                      <p><b>Mobile:</b> {farmerinfo && farmerinfo.mobile}</p>
      
                    </li>

                    <div className="divider" style={{"background":"#424242"}}></div>

                    <li>
                      
                        <p><b>Base cost:</b> {costInfo && costInfo.crop}</p>
                        <p><b>Transport cost:</b> {costInfo && costInfo.transport}</p>
                        <p><b>total (Base Cost + Transport Cost) :</b> {costInfo && costInfo.total}</p>
                        
                        

                    </li>

                    <div className="divider" style={{"background":"#424242"}}/>


                    <li>  

                         <p><b>Reference No. 1</b> </p>
                         <p><b>Buyer name :</b> Ashish Mulgadkar</p>
                         <p><b>Crops :</b> Wheat,Rice,Maize</p>
                         <p><b>Contact no. :</b>9082062465</p>





                    </li>
                    <div className="divider" style={{"background":"#424242"}}/>
                    
                     <li>  

                         <p><b>Reference No. 2</b> </p>
                         <p><b>Buyer name :</b> Akhil Chaudhari</p>
                         <p><b>Crops :</b> Wheat,Maize</p>
                         <p><b>Contact no. :</b>9082342525</p>





                    </li>


                       
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col s6">
                        <Link to="/product/crop/buy"><button className="btn btn-waves" style={{"background":"#00C853" }}>Direct buy</button></Link>
                        </div>
                    </div>
  
              </ul>


            </div>



          </div>
          </MuiThemeProvider>
          )
     }
 
}


let select = (state) => {
    return {
       	state:state.singleProduceReducer,
       	truck:state.singleTruckReducer,
        
        
    };
  }
  
  export default connect (select)(singleProduce);



