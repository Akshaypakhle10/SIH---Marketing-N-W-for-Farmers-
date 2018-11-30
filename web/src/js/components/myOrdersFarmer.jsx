import React from "react"
import { Component} from "react";
import {connect} from "react-redux";
import {Redirect,Link} from "react-router-dom";

class myOrdersFarmer extends Component{

	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="transaction-box container">
			<h1 className="center-align"> my crops</h1>
				<ul className="collection">
					<li className="collection-item">
						<div className="row">
				      		<div className="col s8">
				      			<div className="card">
							        <div className="card-content white-text">
							          <span className="card-title">Crop</span>
								          <table >
								          		<thead>
								          		</thead>
									          <tbody>
										          <tr>
										          	<th>Name</th>
										          	<td>Wheat</td>
										          </tr>
										          <tr>
										          	<th>type</th>
										          	<td>Winter Wheat</td>
										          </tr>
										           <tr>
										          	<th>Status</th>
										          	<td><span style={{"color":"Green"}} >Sold</span></td>
										          </tr>
										           
										        </tbody>
								          </table>


							         
							        </div>

							      
							      </div>
				      		</div>

				      		<div className="col s8">
				      			<div className="card">
							        <div className="card-content white-text">
								          <table >
								          		<thead>
								          		</thead>
									          <tbody>
										          <tr>
										          	<th>Name</th>
										          	<td>Wheat</td>
										          </tr>
										          <tr>
										          	<th>type</th>
										          	<td>Winter Wheat</td>
										          </tr>
										          <tr>
										          	<th>status</th>
										          	<td><span style={{"color":"Red"}}>Not Sold</span></td>
										          </tr>
										           
										        </tbody>
								          </table>


							         
							        </div>
							      
							      </div>
				      		</div>
				      		
				      		
				      		
			      		</div>
			      </li>
			      		

											
					




			      
			    
			    </ul>
			</div>
			)
	}
}

export default (myOrdersFarmer);