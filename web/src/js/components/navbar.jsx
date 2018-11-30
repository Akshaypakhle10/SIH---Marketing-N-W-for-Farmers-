import React ,{Component} from "react";
import {Link, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton'; 		
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DropDownMenu from 'material-ui/DropDownMenu';



class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
   
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';



class navbar extends React.Component {
	constructor(props){
		super(props);
		this.state={
			login:false,
			open:false

		}
		console.log(this.state)
		
	}

	handleClick=(ev)=>{
		this.setState({
			open:!this.state.open
		})
	}
	

    render() {
    	console.log(this.state)
    		let buyerNav =[];
    		let farmerNav =[{
		    			url:"/uploadCrop",
		    			link:"upload Crop"
		    		}]

    		let navs=[{
		    			url:"/Login/farmer",
		    			link:"login as Farmer"

		    		},{
		    			url:"/Login/buyer",

		    		},{
		    			url:"/Signup/farmer",
		    			link:"login as Farmer"

		    		},{
		    			url:"/Signup/buyer",
		    			link:"login as buyer"

		    		}]

       	
       	return(
      	// 				<nav>
						 //    <div className="nav-fixed">
						 //    	{this.props.user.loggedIn?
						 //    		(this.props.user.user.user.isFarmer?( 
						 //    			<ul id="nav-mobile" className="right hide-on-med-and-down">
						 //    				<li>
						 //    					<Link to="/uploadCrop">upload Crop</Link>

						 //    				</li>
						 //    				<li>
						 //    					<Link to="/logout">logout</Link>

						    				
						 //    				</li>
						 //    			 </ul>):










						 //    		(<ul id="nav-mobile" className="right hide-on-med-and-down">
						    				
						 //    		 </ul>)
							// 		):(
						 //      	 	<ul id="nav-mobile" className="right hide-on-med-and-down">
						 //      	 		<li>
						 //      	 			<Link to = "/Signup/farmer">sign up as Farmer</Link>
						 //      	 		</li>
						 //      	 		<li>
						 //      	 			<Link to = "/Signup/buyer">sign up as buyer</Link>

						 //      	 		</li>
						 //      	 		<li>
						 //      	 			<Link to = "/">Home</Link>

						 //      	 		</li>

						 //      	 	 </ul>
						 //      	)}			         
						     
						 //    </div>
		 				// </nav>
		 	<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
		 	<div>
			
    			<AppBar title="SIH"
    			onLeftIconButtonClick={this.handleClick}
    			
    			style={{"backgroundColor":"#2e7d32"}} //"#2e7d32"
    			 />
    			

    			
  			<Drawer open={this.state.open}>
  				<FlatButton onClick={this.handleClick} label="close"/>
  					 	{this.props.user.loggedIn?
						    		(this.props.user.user.user.isFarmer?(
						    		<div>
						    		<MenuItem><Link to ="/uploadCrop">upload crop</Link></MenuItem>
						    		</div>
		          			
									

						    			):










						    		(
						    		<MenuItem><Link to = "/myOrders/buyer">my orders</Link></MenuItem>)
									):(
									<div>
									 <MenuItem><Link to = "/Signup/farmer">sign up as Farmer</Link></MenuItem>
							          <MenuItem><Link to = "/Signup/buyer">sign up as buyer</Link></MenuItem>
							          <MenuItem><Link to = "/admin">Login as Admin</Link></MenuItem>
									<MenuItem><Link to="/transport/signUp">Sign Up as Truck Company</Link></MenuItem>
									<MenuItem><Link to ="/">Home</Link></MenuItem>
						      	 	
						      	 	</div>
						      	 		
						      	)}
  				
		         
		        </Drawer>
		  		
	        </div>
  			</MuiThemeProvider>


       		)
    }
}


let select = (state) => {
    return {
       
       user :state.authReducer
        
        
    };
  }
  
  export default withRouter(connect (select)(navbar));