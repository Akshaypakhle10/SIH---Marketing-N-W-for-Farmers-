import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import TransportAuthService from "../../../../ApiMiddleware/api/transportAuthService";
import{ Link ,Redirect} from "react-router-dom";



class TransportSignIn extends Component{


	constructor(props){

		super(props);
		this.onSubmit=this.onSubmit.bind(this);
		this.state={
			redirect:false
		};
	}

		onSubmit(event){

			event.preventDefault();
			if(event.target.mail.value!="" &&  event.target.pass.value!=""){

				let data ={
				mail : event.target.mail.value,
				pass: event.target.pass.value
				}	

				console.log(data.mail)

				this.props.dispatch(TransportAuthService.postTransportServiceApi('/truckCompany/signin',data)).then(response =>{
					console.log(response)
					if(response.type == "successTransportSignUp")
						this.setState({
							redirect:true
						})
					else{
						alert("email or password is incorrect")
					}
				})
				.catch(err =>{
					alert(err.message)
				})

			}
			else{
				alert('Fill all credentials');
			}
		}

	

	render(){
		console.log(this.state.redirect)
		console.log(this.props.transport_user)
		if(this.state.redirect==true){
			return <Redirect to="/transport/home"/>;
		}

		return(

				<div className="TransportSignUp">
					<div className="container">
						<h1 className="center-align">Log In</h1>
						<div className="row">
							    <form className="form" onSubmit={this.onSubmit}>
							     
							    	<div className="input-field col s12">
							          <input  id="mail" type="email" name="mail" className="validate" placeholder="Email "/>
							        </div>

			 				
							      <div className="input-field col s12">
							        <input  id="pass" type="password" name="pass" className="validate" placeholder="Password"/>						        
							      </div>

							      <div className="row">
								      <div className="input-field col s6">
								        <button type="submit" className="btn btn-waves" >Sign In</button>
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
	console.log(state)
    return {
       
        transport_user:state.transportAuthReducer
        
    };
  }
  
  export default connect (select)(TransportSignIn);