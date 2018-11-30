import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import TransportAuthService from "../../../../ApiMiddleware/api/transportAuthService";
import{ Link ,Redirect} from "react-router-dom";


class TransportSignUp extends Component{

	constructor(props){
		super(props);
		console.log(this.props);
		this.onSubmit = this.onSubmit.bind(this);
		this.state={
			redirect:false
		};
	}

	onSubmit(event){

		event.preventDefault();
		let error=false;
		let error_msg="";
		let fields=["oname","pass","cname","email","dist"];
		fields.forEach((param)=>{
			console.log(event.target[param].value);
			if(event.target[param].value==""){
				error=true;
				error_msg="PLease fill all credentials";
			}
		});




		if (error==true) {
			alert(error_msg);
		}
		else{
			console.log("No error");

			let data={};

			fields.forEach((param)=>{

				data[param]=event.target[param].value;

			});

			this.props.dispatch(TransportAuthService.postTransportServiceSignUpApi('/truckCompany/signup',data)).then(

					(response)=>{
						this.setState(
							{
								redirect:true
							}
						);
					}

				).catch(

					(err)=>{

						console.log(err);
						alert(err.msg);
					}

				)

		}
	}

	render(){

		if(this.state.redirect){
			return <Redirect to="/transport"/>;
		}

	
		return(

				<div className="TransportSignUp">
					<div className="container">
						<h1 className="center-align">signup</h1>
						<div className="row">
							    <form className="form" onSubmit={this.onSubmit}>
							      
							        <div className="input-field col s12">
							          <input  id="cname" type="text" name="cname" className="validate" placeholder="Company Name"/>
							        </div>
							        


							        <div className="input-field col s12">
							          <input  id="oname" type="text" name="oname" className="validate" placeholder="Owner Name"/>
							        </div>

							        <div className="input-field col s12">
							          <input  id="dist" type="text" name="dist" className="validate" placeholder="District"/>
							        </div>
							        
							    	<div className="input-field col s12">
							          <input  id="email" type="email" name="email" className="validate" placeholder="Email "/>
							        </div>

			 				
							      <div className="input-field col s12">
							        <input  id="pass" type="password" name="pass" className="validate" placeholder="Password"/>						        
							      </div>

							      <div className="row">
								      <div className="input-field col s6" id ="myButton">
								        <button type="submit" className="btn btn-waves" >Sign up</button>
								      </div>
							      </div>
							    </form>
							  </div>
						</div>

				</div>
			)
	}
}


let select = (state) => {
	//console.log(state)
    return {
     
   };
 }
 export default  connect (select)(TransportSignUp);