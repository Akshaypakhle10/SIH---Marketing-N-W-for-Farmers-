import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import "../../../css/LandingPage.css";
import authService from "../../../ApiMiddleware/api/authService";
import{ Link ,Redirect} from "react-router-dom";




class Signup extends Component {
	constructor(props){
		super(props);
		console.log(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.state={
			redirect:false
		}
	}

	onSubmit(event){
		event.preventDefault();
		let error = false;
		/* password: req.body.password,
            aadhar: req.body.aadhar,
            mobile: req.body.mobile,
            lang: req.body.lang,
            addr1: req.body.addr1,
            taluka: req.body.taluka,
            district: req.body.district,
            state: req.body.state,
            pincode: req.body.pincode,
            isFarmer: req.body.isfarme*/
		let checkingParams = ["password","adhar","mobile","lang","addr","taluka","district","state","pincode"];

		checkingParams.forEach((param)=>{
				console.log(event.target[param])

			if(event.target[param].value==""){
				error =true;
			}
		})
		if(error == true)
			alert('fill all credentails')
		else{

			
			let data ={};
			checkingParams.forEach((param)=>{
				data[param] = event.target[param].value
			})
			data.isFarmer =(this.props.role === "farmer")?true:false;
			console.log(data)
			this.props.dispatch(authService.postServiceSignupApi('/signup',data)).then(response =>{
				this.setState({
					redirect:true
				})
			})
			.catch(err =>{
				console.log(err)
				alert(err.message)
			})
		}
		
	}
   

    render() {
    	if(this.state.redirect || this.props.isAuthenticated){
    		return <Redirect to ="/"/>;
    	}

    	
        return(

        		<div >
        			<h1 className="center-align">{this.props.role} signup</h1>

		        	<div className="row">
					    <form className="form-horizantal" onSubmit={this.onSubmit}>
					      
					        <div className="col s12">
					          <input  id="name" type="text" name="name" className="validate"/>
					          <label for="name">name</label>
					        </div>
					       
					       
					     
					      <div className="col s12">
					        <input  id="password" type="password" name="password" className="validate"/>
					          <label for="password">password</label>
					      </div>
					      <div className="col s12">
					        <input  id="adhar" type="Number" name="adhar" className="validate"/>
					          <label for="adhar">adhar</label>
					      </div>
					      <div className="col s12">
					        <input  id="mobile" type="Number" name="mobile" className="validate"/>
					          <label for="mobile">mobile No.</label>
					      </div>
					       <div className="col s12">
					        <input  id="language" type="text" name="lang" className="validate"/>
					          <label for="language">Language</label>
					      </div>
					      <div className="col s12">
					        <input  id="address" type="text" name="addr" className="validate"/>
					          <label for="address">Nearest address</label>
					      </div>
					       <div className="col s12">
					        <input  id="district" type="text" name="district" className="validate"/>
					          <label for="district">Nearest Mandi district</label>
					      </div>
					      
					      <div className="col s12">
					        <input  id="state" type="text" name="state" className="validate"/>
					          <label for="state">state</label>
					      </div>
					      <div className="col s12">
					        <input  id="pincode" type="Number" name="pincode" className="validate"/>
					          <label for="pincode">pincode</label>
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


let select = (state) => {
	console.log(state)
    return {
       
        user:state.authReducer
        
    };
  }
  
  export default connect (select)(Signup);
