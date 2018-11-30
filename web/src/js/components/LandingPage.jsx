import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import "../../css/LandingPage.css";
import{ Link ,Redirect} from "react-router-dom";
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Login  from './authComponents/login';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TransportSignIn from './transportComponents/transportAuthComponents/transportSignIn';

    
import "../../css/newLandingPage.css";





class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state={
            redirectToFarmer:false,
            redirectToBuyer:false,
            redirectToTransport:false
        }
    }
    onBuyerButton = (event) =>{

        this.setState({
            redirectToBuyer:true
        })
    }
    onFarmerButton = (event) =>{
        this.setState({
            redirectToFarmer:!this.state.redirectToFarmer   
        })
    }
    onBuyerButton = (event) =>{
        this.setState({
            redirectToBuyer:!this.state.redirectToBuyer  
        })
    }

     onTransportButton = (event) =>{
        this.setState({
            redirectToTransport:!this.state.redirectToTransport  
        })
    }

    render() {
        const actionsForFarmer = [
              <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.onFarmerButton}
              />
              
            ];
             const actionsForBuyer = [
              <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.onBuyerButton}
              />
              
            ];
    
              const actionsForTransport = [
              <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.onTransportButton}
              />
              
            ];   
        return(
            // <div>
            //     <div className="row">
                 

            //     </div>


            //     <div className="LandingPage-login-box section row">
            //             <div className="col s6">
            //                 <p className="flow-text">
            //                     Welcome to Community of Farmers!!
            //                 </p>
            //             </div>
            //             <div className="col s6">
            //                     <div className="LandingPage-login-box">
                                    

            //                         <div className="row">
            //                             <div className="col offset-s2 s6 class-btn ">
            //                                 <button className="btn waves-light btn-large btn-farmer" onClick={this.onFarmerButton} >
            //                                     Login As Farmer
            //                                 </button>
            //                             </div>
            //                          </div>
            //                          <div className="row">
            //                             <div className="col offset-s2 s6 class-btn "  >
            //                                 <button className="btn waves-light btn-large btn-buyer" onClick={this.onBuyerButton} >
            //                                     Login As buyer
            //                                 </button>
            //                             </div>
            //                           </div>
                                        
                                        

                                      
            //                      </div>
            //                 </div>
            //           </div>
            // </div>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>

            <div >
               
                    <br/>
                    <br/>
                    <br/>
                    <div className="row Halign-wrapper">
                        <div className="login-buttons center-align  container">
                        <Card  className="card col s6" style={{"maxHeight":"33%","width":"100%","background":"#EEEEEE"}}>
                            <CardMedia style={{"maxWidth":"44%","minWidth":"10%"}}>
                                <div className="row">
                                   <img src={require("../../images/if_Farmer_379478.png")}  style={{"maxWidth":"50%","minWidth":"10%","marginTop":"5%","marginBottom":"5%","position":"relative","left": "71%"
}}/>
                                   </div>
                            </CardMedia>
                             
                                  <button className="waves-effect waves-light btn-large" onClick={this.onFarmerButton } style={{"background":"#BDBDBD"}}>Login as Farmer </button>
                                  
                            
                           
                           
                        </Card>
                        <Card  className="card col s6" style={{"maxHeight":"33%","background":"#EEEEEE"}}>
                            <CardMedia style={{"maxWidth":"44%","minWidth":"10%"}}>
                                <div className="row">
                                   <img src={require("../../images/if_user_285655.png")}  style={{"maxWidth":"50%","minWidth":"10%","marginTop":"5%","marginBottom":"5%","position":"relative","left": "71%"
}}/>
                                   </div>
                            </CardMedia>
                            
                             
                                  <button className="waves-effect waves-light btn-large" onClick={this.onBuyerButton } style={{"background":"#BDBDBD"}}>Login as Buyer </button>
                                  
                            
                           
                           
                        </Card>

                        <Card  className="card col s6" style={{"maxHeight":"33%","background":"#EEEEEE"}}>
                            <CardMedia style={{"maxWidth":"44%","minWidth":"10%"}}>
                                <div className="row">
                                   <img src={require("../../images/if_truck_406815.png")}  style={{"maxWidth":"50%","minWidth":"10%","marginTop":"5%","marginBottom":"5%","position":"relative","left": "71%"
}}/>
                                   </div>
                            </CardMedia>
                             
                                  <button className="waves-effect waves-light btn-large" onClick={this.onTransportButton } style={{"background":"#BDBDBD"}}>Login as Truck Company </button>
                                  
                            
                           
                           
                        </Card>
                            

                          </div>
                           <Dialog
                              title="Login for farmer"
                              actions={actionsForFarmer}
                              modal={false}
                              open={this.state.redirectToFarmer}
                              onRequestClose={this.handleClose}
                              backgroundColor="red"
                            >
                                <Login isAuthenticated={this.props.user.loggedIn} role={this.state.redirectToFarmer ?"farmer":""}/>

                            </Dialog>
                            <Dialog
                              title="Login for buyer"
                              actions={actionsForBuyer}
                              modal={false}
                              open={this.state.redirectToBuyer}
                              onRequestClose={this.handleClose}
                              backgroundColor="blue"

                            >
                                <Login isAuthenticated={this.props.user.loggedIn} role={this.state.redirectToBuyer ?"buyer":""}/>

                            </Dialog>


                             <Dialog
                              title="Login for Truck Company"
                              actions={actionsForTransport}
                              modal={false}
                              open={this.state.redirectToTransport}
                              onRequestClose={this.handleClose}
                              backgroundColor="blue"

                            >
                                <TransportSignIn isAuthenticated={this.props.user.loggedIn} role={this.state.redirectToTransport ?"transport":""}/>

                            </Dialog>
                         

                    </div>
                

           
            </div>
            </MuiThemeProvider>

        )
    }
}


let select = (state) => {
    return {
       
        user:state.authReducer
        
    };
  }
  
  export default connect (select)(LandingPage);