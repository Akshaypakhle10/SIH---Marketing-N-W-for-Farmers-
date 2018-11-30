import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import TransportTruckService from "../../../ApiMiddleware/api/transportTruckService";
import{ Link ,Redirect} from "react-router-dom";

class TransportAddTruck extends Component{

	constructor(props){

				super(props);
				this.onSubmit=this.onSubmit.bind(this);
				$(document).ready(function(){
	                    $('select').material_select();
	            });

	            this.state={


	            }

	}



	onSubmit(event){

		event.preventDefault();
		let error=false
		let fields=["number","pass"];
		fields.forEach((param)=>{

			if(fields[param]==""){
				error=true;
			}
		});

			if(event.target.type.value=="0"){

				error=true;
			}

			if(error==true){
				alert("Fill all credentials");
			}
			else{

				let data={};

				fields.forEach((param)=>{
					data[param]=event.target[param].value;
				});

				data.available=true;
				data.type=event.target.type.value	
				console.log(data.available);	


				this.props.dispatch(TransportTruckService.postTransportServiceSignUpApi('/truckProtected/add',data)).then(

					(response)=>{
						this.setState(
							{
								redirect:true
							}
						);
					}).catch((err)=>{

						console.log(err);
						alert(err.msg);
					})




			}

		

		

	}

	render(){

		if(this.state.redirect){
			return <Redirect to="/transport/home"/>;
		}


		return(

				<div className="TransportAddTruck">
					<h1 className="center-align">Add Truck</h1>
					<div className="container">
						    <form className="form" onSubmit={this.onSubmit}>
						      
						        <div className="input-field col s12">
						          <input  id="number" type="text" name="number" className="validate" placeholder="Truck Number"/>
						        </div>
						       

								<div className="input-field col s12 ">
								    <select name="type">
								      <option value="0" disabled selected>Select truck type</option>
								      <option value="small">Type 1</option>
								      <option value="medium">Type 2</option>
								      <option value="large">Type 3</option>
								    </select>
								</div>

								


								<div className="input-field col s12">
						        	<input  id="pass" type="password" name="pass" className="validate" placeholder="Password"/>						        
						      	</div>
						    	 
		 					
						      

						      <div className="row">
							      <div className="input-field col s6">
							        <button type="submit" className="btn btn-waves" >Sign up</button>
							      </div>
						      </div>
						    </form>
						  </div>

				</div>
		)
	}
} 


let select=(state)=>{
	return{

	};
}

export default connect(select)(TransportAddTruck);