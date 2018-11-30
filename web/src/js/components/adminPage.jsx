import React from "react";
import {Component} from "react";
import { connect } from "react-redux";
import "../../css/LandingPage.css";
import {Pie} from "react-chartjs-2";
import Toggle from 'material-ui/Toggle';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class adminPage extends Component{
	constructor(props){
		super(props);
		


	}
	onToggling =(event)=>{
		alert("user is blocked");
	}

	render(){
		return(
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
			<div className="adminPage container">
				<Pie data= {{
					        labels: ["January", "February", "March", "April", "May", "June", "July"],
					        datasets: [{
					        label: "My First dataset",
					        backgroundColor: 'rgb(255, 99, 132)',
					        borderColor: 'rgb(255, 99, 132)',
					        data: [0, 10, 5, 2, 20, 30, 45],
					        }]
    }}/>

					<div className="row">
					</div>
					<div className="row">

					    <div className="col s12 m6">
					      		<h1>Farmer Use</h1>
					        	<ul className="collection">
							      <li className="collection-item">
							      <div className="row">
							     	 <div className="col s3 offset-s9">
							     	 <Toggle
							     	 onToggle={this.onToggling}
							      	/>
							     	  </div>
							     	   <div className="col s9">
							     	    Ashvin  
							     	 	
							     	  </div>
							      </div>
							      	
							     
							      	
							      </li>
							      <li className="collection-item">							      <div className="row">
							     	 <div className="col s3 offset-s9">
							     	 <Toggle
							     	 onToggle={this.onToggling}
							      	/>
							     	  </div>
							     	   <div className="col s9">
							     	    Ashvin  
							     	 	
							     	  </div>
							      </div></li>
							      <li className="collection-item">							      <div className="row">
							     	 <div className="col s3 offset-s9">
							     	 <Toggle
							     	 onToggle={this.onToggling}
							      	/>
							     	  </div>
							     	   <div className="col s9">
							     	    varun  
							     	 	
							     	  </div>
							      </div></li>
							      <li className="collection-item">							      <div className="row">
							     	 <div className="col s3 offset-s9">
							     	 <Toggle
							     	 onToggle={this.onToggling}
							      	/>
							     	  </div>
							     	   <div className="col s9">
							     	    Ashvin  
							     	 	
							     	  </div>
							      </div></li>
							    </ul>
								
					       
					    </div>
					    <div className="col s6">
					    	<ul className="collection">
							      <li className="collection-item">
							      <div className="row">
							     	 <div className="col s3 offset-s9">
							     	 <Toggle
							     	 onToggle={this.onToggling}
							      	/>
							     	  </div>
							     	   <div className="col s9">
							     	    Ashvin  
							     	 	
							     	  </div>
							      </div>
							      	
							     
							      	
							      </li>
							      <li className="collection-item">							      <div className="row">
							     	 <div className="col s3 offset-s9">
							     	 <Toggle
							     	 onToggle={this.onToggling}
							      	/>
							     	  </div>
							     	   <div className="col s9">
							     	    Ashvin  
							     	 	
							     	  </div>
							      </div></li>
							      <li className="collection-item">							      <div className="row">
							     	 <div className="col s3 offset-s9">
							     	 <Toggle
							     	 onToggle={this.onToggling}
							      	/>
							     	  </div>
							     	   <div className="col s9">
							     	    varun  
							     	 	
							     	  </div>
							      </div></li>
							      <li className="collection-item">							      <div className="row">
							     	 <div className="col s3 offset-s9">
							     	 <Toggle
							     	 onToggle={this.onToggling}
							      	/>
							     	  </div>
							     	   <div className="col s9">
							     	    Ashvin  
							     	 	
							     	  </div>
							      </div></li>
							    </ul>


					    </div>
					  </div>
			</div>
			</MuiThemeProvider>
			
			)
	}

}

let select = (state) =>{
	return {

	}
}

export default connect (select) (adminPage)