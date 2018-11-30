import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import TransportAuthService from "../../../ApiMiddleware/api/transportAuthService";
import TransportTruckView from "./transportTruckView";
import{ Link ,Redirect} from "react-router-dom";





class TransportHome extends Component{

	constructor(props){

		super(props)
		this.onClickAdd=this.onClickAdd.bind(this);
		
		this.state={
			clicked:false,
			type:""
			
		};
		


	}

	onClickAdd(event){
		event.preventDefault();
		console.log(this.props.trans_state.loggedIn)

		this.setState(

				{

					clicked:true,
					type:"ADD"
				
				}
		)
	}



	render(){

		if(this.state.clicked && this.state.type=="ADD"){
			return (<Redirect to ="/transport/add"/>)
		}

		return(

			<div className="TransportHome">
					<div className="collection" style={{"height":"67px"}}>

						<div className="row" style={{"background":"#212121","height":"65px","paddingLeft":"5%","borderRadius":"2px","position":"absolute","left":"0px","width":"100%"}}>
							<div className=" input-field col s6">
								<input placeholder="Search " id="mySearchBar" type="text" class="validate"/>	
							</div>
							<div className="input-field col s3 " style={{"paddingLeft":"11%"}}>
								<button type="button"  className="btn btn-waves" >Search</button>
							</div>
							<div className="input-field col s3" style={{"paddingLeft":""}}>
								<button type="button" onClick={this.onClickAdd} className="btn btn-waves" >Add Truck</button>
							</div>
						</div>

					</div>
					
				

				

					{<TransportTruckView/>}


						

			</div>

		)
	}
}

let select=(state)=>{
	return {

		trans_state:state.transportAuthReducer
	};
}

export default connect(select)(TransportHome);