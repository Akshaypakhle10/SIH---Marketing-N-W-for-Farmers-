import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import getFarmerOrderService from "../../ApiMiddleware/api/getFarmerOrderService";

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class myOrders extends Component{
	constructor(props){
		super(props);
		//'merchantProtected/myOrders'

		this.props.dispatch(getFarmerOrderService.getServiceApi("/merchantProtected/myOrders"));

	}
	render(){

		console.log(this.props.transaction.data)

		return(
			<div className="transaction-box container">
				<ul className="collection">
				{this.props.transaction.data.length && this.props.transaction.data.map((transaction)=>
					<li className="collection-item">
						<div className="row">
				      		<div className="col s4">
				      			<div className="card">
							        <div className="card-content white-text">
							          <span classNam="card-title">Crop</span>
								          <table >
								          		<thead>
								          		</thead>
									          <tbody>
										          <tr>
										          	<th>Name</th>
										          	<td>{transaction.crop_details.name}</td>
										          </tr>
										          <tr>
										          	<th>type</th>
										          	<td>{transaction.crop_details.type}</td>
										          </tr>
										           
										        </tbody>
								          </table>


							         
							        </div>
							      
							      </div>
				      		</div>
				      		<div className="col s4">
				      			<div className="card">
							        <div className="card-content white-text">
							          <span className="card-title">Farmer</span>
							          	 <table >
								          		<thead>
								          		</thead>
									          <tbody>
										          <tr>
										          	<th>Cost</th>
										          	<td>{transaction.farmer_amount}</td>
										          </tr>
										          <tr>
										          	<th>status</th>
										          	<td>{transaction.status}</td>
										          </tr>
										           
										        </tbody>
								          </table>

							         
							        </div>
							      
							      </div>
				      		</div>
				      		<div className="col s4">
				      			<div className="card">
							        <div className="card-content white-text">
							          <span className="card-title">Transport</span>
							          	 <table >
								          		<thead>
								          		</thead>
									          <tbody>
										          <tr>
										          	<th>Cost</th>
										          	<td>{transaction.transport_amount}</td>
										          </tr>
										          <tr>
										          	<th>OTP</th>
										          	<td>{transaction.merchant_otp}</td>
										          </tr>
										           
										        </tbody>
								          </table>

							         
							        </div>
							      
							      </div>
				      		</div>
				      		{transaction.status === "Processing"?<div className="btn btn-waves waves-large">
				      		 Complete Share payment

				      		</div>:<div></div>}
				      		
			      		</div>
			      </li>
			      		

					)}
						
					




			      
			    
			    </ul>
			</div>
			)
	}
}

let select = (state) =>{
	return {

		transaction:state.farmerTransactionReducer

	}
}

export default connect (select) (myOrders)