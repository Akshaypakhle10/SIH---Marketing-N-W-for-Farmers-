import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import "../../css/LandingPage.css"
import cropService from "../../ApiMiddleware/api/cropService";
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'; 



class ProduceUpload extends Component {
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange=this.onChange.bind(this);
		this.state={
			crop:"Enter Crop Name",
			redirect:false,
			std:false,
			type:"Enter Crop Type"
		}
	}


	onChange(event){
		this.setState({
					std:!this.state.std
				})

	}

	onSubmit(event){
		event.preventDefault();
		
		

		if(this.state.crop== undefined || event.target.quantity.value == undefined || event.target.price.value == undefined ){

			alert("fill all fields");
			throw new Error("some fields Empty");
		}
		var data = {
			crop:this.state.crop,
			type:this.state.type,
			quantity:event.target.quantity.value,
			farmerPrice:event.target.price.value
		}
		if(this.state.std){
			data.farmerPrice=200;
		}
		this.props.dispatch(cropService.postServiceApi('/farmerProtected/produce',data)).then(response=>this.setState({redirect:true}))
		this.setState({
			crop:this.props.crop,
			

		})
	}
    
    onCropNameChange = (ev,index,value) =>{
		this.setState({

			crop:value,
			
		})
		//merchantProtected/getProducts

		
	}
	onCropTypeChange =(ev,target,value) =>this.setState({type:value})

    render() {
    	if(this.state.redirect)
    		return <Redirect to="/farmer/myOrders"/>
    	console.log(this.props.crop);
    	let crops = {
    	
    		"Rice":
    		["Basmati","Brown Rice","Red Rice","Black Rice","Kolam"]

    	
    	,"Maize":
    		["baby-corn","sweet-corn","pop-corn","indian corn"]

    	,
    	
    		"Wheat":
    		["Hard Red","Winter Wheat","White Wheat"]

    	}
    	let cropTypes= Object.keys(crops);


        return(
        		<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>

        		<div className="login-box " style={{"padding":"2% 2% 2% 2%","boxShadow":"3px 3px 30px  1px #888888","border":".5px solid #757575 "}}>
        			<div className="divider" style={{"background":"#757575"}}></div>
        			<h3 className="center-align" style={{"fontFamily":"sans-serif"}}>Upload Crops</h3>
        			<div className="divider" style={{"background":"#757575"}}></div>
		        	<div className="row">
					    <form className="form-horizantal" onSubmit={this.onSubmit}>
					      <div className="form-group">
					        <div className="input-field col s6" id="cropName">
					                 <DropDownMenu
					 		           floatingLabelText="crop name"
					 		           value={this.state.crop}
					 		           onChange={this.onCropNameChange}
					 		           style={{
					 		           	"width":"100%",
					 		           	"color":"black"
					 		           }}
					 		           

					 		         	>
					 		           {cropTypes.map((crop,key)=> <MenuItem key={key} 
					 		 								          	value={crop} 
					 		 								          	primaryText={crop}
					 		 								          	/>
					 		 								          	)}
					 		        </DropDownMenu>
					
					        </div>

					        <div className="input-field col s6" id="cropType">
					                 <DropDownMenu
					 		           floatingLabelText="crop Type"
					 		           value={this.state.type}
					 		           onChange={this.onCropTypeChange}
					 		           style={{
					 		           	"width":"100%",
					 		           	"color":"black"
					 		           }}
					 		           

					 		         	>
					 		           {crops[this.state.crop ] && crops[this.state.crop || "Rice"].map((crop,key)=> <MenuItem key={key} 
					 		 								          	value={crop} 
					 		 								          	primaryText={crop}
					 		 								          	/>
					 		 								          	)}
					 		        </DropDownMenu>
					
					        </div>
					       </div>
					       
					     
					      <div className="form-group">
					        <div class="input-field col s12">
								

							  </div>
					      </div>
					      
					      <div className="form-group">
					        <div className="input-field col s12">
					          <input id="quantity" type="number" name="quantity" className="validate"/>
					          <label for="quantity">weight in (kg)</label>
					        </div>
					      </div>


					      <div className="form-group">
					        <div className="input-field col s12">
					          <input id="price" type="number" name="price" className="validate" disabled={(this.state.std)?"disabled":""} placeholder={(this.state.std)?"Standard price":"Enter price in(Rs)"}/>  
					        </div>
					      </div>

					       
					       		<label>
	       				       		<input type="checkbox" className="filled-in" onChange={this.onChange}/>
	        				  		<span>Opt for standard price</span>
					       		</label>
					       		<br/>
				
					      
					     
					       <div className="form-group">
					        <div className="input-field col s12">
					        	<button type="submit"  className="btn waves-effect waves-light" style={{"background":"#00C853"}}>submit</button>
				            </div>
					      </div>

					     

					      
					    </form>
					  </div>
				 </div>
		</MuiThemeProvider>
        	
        )
    }
}


let select = (state) => {
    return {
       
       crop:state.cropReducer 
    };
  }
  
  export default connect (select)(ProduceUpload);
