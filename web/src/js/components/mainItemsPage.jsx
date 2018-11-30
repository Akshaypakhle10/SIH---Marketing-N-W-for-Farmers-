import React  from "react";
import {Component} from "react";
import ItemCard from "./LandingPageComponents/itemCard"
import { connect } from "react-redux";
import produceService from "../../ApiMiddleware/api/produceService";
import "../../css/LandingPage.css";
import DropDownMenu from 'material-ui/DropDownMenu';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MenuItem from 'material-ui/MenuItem';  
import RaisedButton from 'material-ui/RaisedButton';



class MainItemsPage extends Component {
   
	constructor(props){
		super(props);


		this.state ={
			quantity:100,
			crop:"Rice",
			type:"Basmati"
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onQuantityChange = this.onQuantityChange.bind(this);
		this.props.dispatch(produceService.getServiceApi(`/merchantProtected/getProducts`))
		 

	}
	
	

	
	onQuantityChange(event,index,value){
		this.setState({
			quantity:value
		})
	}
	handleSubmit (event){
		event.preventDefault();

		let {crop,type,quantity} = this.state;
		
		console.log(crop,type,quantity)
		this.props.dispatch(produceService.getServiceApi(`/merchantProtected/search/?name=${crop}&type=${type}&quant=${quantity}`))
	}
	
	onCropNameChange = (ev,index,value) =>{
		this.setState({

			crop:value,
			
		})
		//merchantProtected/getProducts

		
	}
	onCropTypeChange =(ev,target,value) =>this.setState({type:value})
	
    render() {
    	console.log(this.state)
    	let crops = {
    	
    		"Rice":
    		["Basmati","Brown Rice","Red Rice","Black Rice","Kolam"]

    	
    	,"Maize":
    		["baby-corn","sweet-corn","pop-corn","indian corn"]

    	,
    	
    		"Wheat":
    		["Hard Red","Winter Wheat","White Wheat"]

    	}
    	let weight = [];
    	for(var i = 100 ; i<=1000;i=i+5)
    		weight.push(i);
    	let cropTypes= Object.keys(crops);
    	console.log(cropTypes)
        return(
		 	<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
		 	<div className="mainPage">
         		
					    <div className="row">
					      <form className="col s12"  onSubmit={this.handleSubmit}>

					        <div className="row" >

					           <div className="input-field col s3  pull-right">
					         
					 		         <DropDownMenu
					 		           floatingLabelText="crop name"
					 		           value={this.state.crop}
					 		           onChange={this.onCropNameChange}
					 		           style={{
					 		           	"width":"100%",
					 		           	"position":"absolute",

					 		           	"top":"10px"
					 		           }}
					 		           

					 		         	>
					 		           {cropTypes.map((crop,key)=> <MenuItem key={key} 
					 		 								          	value={crop} 
					 		 								          	primaryText={crop}
					 		 								          	/>
					 		 								          	)}
					 		         </DropDownMenu>
					          </div>
					           <div className="input-field col s3 pull-right">
					           
					 		         <DropDownMenu
					 		           floatingLabelText="crop type"
					 		           value={this.state.type}
					 		           onChange={this.onCropTypeChange}
					 		           style={{
					 		           	"width":"100%",
					 		           	"position":"absolute",
					 		           	"top":"10px"
					 		           }}

					 		         	>
					 		         	<MenuItem primaryText="choose your crop Type"/>
					 		           {crops["Rice"].map((crop,key)=> <MenuItem key={key} 
					 		 								          	value={crop} 
					 		 								          	primaryText={crop}
					 		 								          	/>
					 		 								          	)}
					 		         </DropDownMenu>
					          </div>
					         
					         
					          <div className="input-field col s3 pull-right">

					          <DropDownMenu
			 		           floatingLabelText="crop type"
			 		           value={this.state.quantity}
			 		           onChange={this.onQuantityChange}
			 		           style={{
					 		           	"width":"100%",
					 		           	"position":"absolute",
					 		           	"top":"10px"
					 		           }}

			 		         	>
			 		         	{weight.map((wieght)=><MenuItem 
			 		         		value={wieght}
			 		         		primaryText={wieght+" kg"}
			 		         		/>)}
					 		           									
					 		   </DropDownMenu>
					          </div>

					          <br/>
					           <div className="input-field col s3 pull-right">
					            <RaisedButton type="submit" className="btn btn-waves"><i className="material-icons" style={{"height": "36px","border-radius": "2px","position": "absolute","width": "75px","top": "-1px","left": "-48px"}}>search</i> search </RaisedButton>
					          </div>
					        </div>
					        <div className="divider"></div>
					        <br/>
					        <br/>
					      </form>
			 </div>
					   

	         	<div className="mainPage"> 
		         	 <div className="container">
			         	 <div className="row item-card" style={{"width":"90%"}}>
			         	 {this.props.state.items.map((item)=>{
			         	 	console.log("item are",item)
			         	 	return <ItemCard crop={item.crop} type={item.type} quantity={item.quantity} id={item._id} />
			         	 			
			         	 })}
			         	 <ItemCard crop="wheat" type="basmati" quantity={54} id="45skdfjj"/>
			         	
			         	 </div>
	         		</div>
         		</div>
         	</div>


        	
				</MuiThemeProvider>
      //   	<div className="mainPage">
      //    		<div className="nav-wrapper subnav-filters">
					 //    <div className="row">
					 //      <form className="col s12"  onSubmit={this.handleSubmit}>
					 //        <div className="row">
					 //           <div className="input-field col s3">
					 //             <select  name="cropName" id="cropName" onChange={this.onCropNameChange}>
					 //            {crops.map((crop,key)=>{
					 //            	return <option key={key} value={crop.cropType}>{crop.cropType}</option>
					 //            })}
					 //          </select>
					 // 		         <DropDownMenu
					 // 		           floatingLabelText="crop name"
					 // 		           value={this.state.crop}
					 // 		           onChange={this.handleChange}
					 // 		         	>
					 // 		           {crops.map((crop,key)=> <MenuItem key={key} 
					 // 		 								          	value={crop.cropType} 
					 // 		 								          	primaryText={crop.cropType}
					 // 		 								          	/>
					 // 		 								          	)}
					 // 		         </DropDownMenu>
					 //          </div>
					 //          <div className="input-field col s3">
					 //            	<select name="cropType" id="cropType">
					 // 		 	 	<option value="">---</option>
					 // 		 	 	{crops[0].subTypes.map((type,key)=>{
					 // 		 	 		return <option key={key} value={type}>{type}</option>
					 // 		 	 	})
					 // 		 	 	}
					 // 		 	 </select>
					 // 		 	  <DropDownMenu
					 // 		            floatingLabelText="crop name"
					 // 		            value={this.state.value}
					 // 		            onChange={this.handleChange}
					 // 		          >
					 // 		            {crops.map((crop,key)=> <MenuItem key={key} value={crop.cropType} primaryText={crop.cropType}/>)}
					 // 		       </DropDownMenu>


					 //          </div>
					 //          <div className="input-field col s3">
					 //            <input type="number" placeholder="quantity in (kg)" id="quantity" onInput={this.onQuantityChange}	/>
					 //            <label for="quantity">quantity</label>
					 //          </div>
					 //           <div className="input-field col s3">
					 //            <button type="submit" className="btn btn-waves">search</button>
					 //          </div>
					 //        </div>
					 //      </form>
					 //    </div>
					 //   <DropDownMenu
				  //          floatingLabelText="crop name"
				  //          value={this.state.value}
				  //          onChange={this.handleChange}
				  //        >
				  //          {crops.map((crop,key)=> <MenuItem key={key} value={crop.cropType} primaryText={crop.cropType}/>)}
				  //     </DropDownMenu>
					 // </div>
	     //     	<div className=" section no-pad-bot mainPage">
		    //      	 <div className="container">
			   //       	 <div className="row">
			   //       	 {this.props.state.items.map((item)=>{
			   //       	 	console.log("item are",item)
			   //       	 	return <ItemCard crop={item.crop} type={item.type} quantity={item.quantity} id={item._id}/>
			   //       	 })}
			        	 	

			   //       	 </div>
	     //     		</div>
      //    		</div>
      //    	</div>

        )
    }
}


let mapStateToProps = (state) => {
    return {
       state : state.itemReducer, 
    };
  }
  
  export default connect (mapStateToProps)(MainItemsPage);