import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import TransportTruckService from "../../../ApiMiddleware/api/transportTruckService";
import "../../../css/truckComponents.css";
import{ Link ,Redirect} from "react-router-dom";



class TransportTruckView extends Component{

	constructor(props){

		super(props);
		this.props.dispatch(TransportTruckService.getTransportServiceApi("/truckCompany/getTrucks/"));
		this.state={
			isToggled:true
		}

	}

	render(){
		

		return(

			<div className="TransportTruckView">
					<div className="collection" id="myBox">
						

						<div className="collection" style={{"background":"#AED581","paddingTop":"2%","height":"auto"}}>
								<div className="row">
									
										<div className="col s3">
											<i className="material-icons" style={{"fontSize":"40px","marginLeft":"20%"}}>airport_shuttle</i>
										</div>
										<div className="col s3" style={{"width":"30%"}}>
											
										</div>

										<div className="col s3" id="myCheck">

					
											        <div className="switch col s6" id="myLever">
													    <label>
													      Deactivated
													      <input type="checkbox"/>
													      <span className="lever"></span>
													      Activated
													    </label>
													</div>
											  

										</div>
									


								</div>
						</div>

						


					</div>
			</div>
		);
	}

}

let select=(state)=>{
	return{

		truck:state.transportTruckRequestReducer
	};
}

export default connect(select)(TransportTruckView);