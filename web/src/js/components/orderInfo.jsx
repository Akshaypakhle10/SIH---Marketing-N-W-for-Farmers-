import React  from "react";
import {Component} from "react";
import {Link} from "react-router-dom"
import {Redirect} from "react-router-dom"
import { connect } from "react-redux";
import singleProduceService from "../../ApiMiddleware/api/singleProduceService"
import orderProduceService from "../../ApiMiddleware/api/orderProduceService";
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "../../css/global.css";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class OrderInfo extends Component{

	constructor(props){
		super(props);
	}

	render(){
			
		

		return(
			<div className="OrderInfo" style={{"paddingLeft":"30%"}}>
				<ul className="col s6" style={{"background":"#E0E0E0","paddingTop":"1%","marginRight":"5%","marginTop":"5%","width":"55%"}} id="myUl">
                    <p style={{ "marginLeft":"20%"}}><h5>Order info</h5></p>
                    <div className="divider" style={{"background":"#424242"}}></div>
                    <li>   
                      <p><b>Crop :</b> Rice</p>
                                                            
                      <p><b>Type: </b> Kolam</p>
                                                      
                      <p><b>Quantity:</b>500kg</p>
                        
                    </li>

                    <div className="divider" style={{"background":"#424242"}}></div>

                    <li>
                             
                      <p><b>Address:</b>Shivam Society,Sector 17,Thane,Maharashtra</p>
                      
                      <p><b>Mobile:</b>8850184206</p>
      
                    </li>

                    <div className="divider" style={{"background":"#424242"}}></div>

                    <li>
                      
                        <p><b>Base cost:</b>5000</p>
                        <p><b>Transport cost:</b>219.825</p>
                        <p><b>total (Base Cost + Transport Cost) :</b>5219.825</p>
                        
                        

                    </li>

                    <div className="divider" style={{"background":"#424242"}}></div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row" style={{"paddingLeft":"5%"}}>
                        <div className="col s6">
                        <Link to="/buyer"><button className="btn btn-waves" style={{"background":"#00C853" }}>I'm satisfied</button></Link>
                        </div>
                        <div className="col s6">
                        <Link to="/buyer"><button className="btn btn-waves" style={{"background":"#00C853" }}>I'm not satisfied</button></Link>
                        </div>
                    </div>
                    <br/>
                    <br/>
  
              </ul>

			</div>
		)
	}
}

let select = (state) =>{
	return {


	}
}

  
  export default connect (select)(OrderInfo);