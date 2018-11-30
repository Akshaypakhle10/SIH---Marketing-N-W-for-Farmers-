import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainItemsPage  from './components/mainItemsPage'
import navbar  from './components/navbar';
import ProduceUpload  from './components/produceUpload';
import LandingPage  from './components/LandingPage';
import TransportSignUp from './components/transportComponents/transportAuthComponents/transportSignUp';
import TransportSignIn from './components/transportComponents/transportAuthComponents/transportSignIn';
import TransportHome from './components/transportComponents/transportHome';
import TransportAddTruck from './components/transportComponents/transportAddTruck';
import TransportTruckView from './components/transportComponents/transportTruckView';
import Login  from './components/authComponents/login';
import Signup  from './components/authComponents/Signup';
import singleProduce  from './components/singleProduce';
import Checkout  from './components/checkout';
import myOrders  from './components/myOrders';

import OrderInfo  from './components/orderInfo';

import farmerLandingPage  from './components/farmerLandingPage';

import myOrdersFarmer  from './components/myOrdersFarmer';


import adminPage  from './components/adminPage';










export const getRoutes = store => {
    
    return (
        <div>
        	<Route path ="*" component={navbar} />
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/transport/signIn" component={TransportSignIn}/>
            <Route exact path="/transport/signUp" component={TransportSignUp}/>
            <Route exact path="/farmer" component={myOrdersFarmer}/>

            <Route exact path="/transport" component={TransportSignIn}/>
            <Route exact path="/transport/home" component={TransportHome}/>
            <Route exact path="/transport/add" component={TransportAddTruck}/>
            <Route exact path="/buyer" component={MainItemsPage}/>
            <Route exact path="/product/crop/:cropId/:quantity" component={singleProduce}/>
            <Route exact path="/product/crop/buy" component={Checkout}/>
            <Route exact path="/myOrders/buyer" component={myOrders}/>
            <Route exact path="/order-info" component={OrderInfo}/>
            <Route exact path="/myOrders/farmer" component={myOrdersFarmer}/>





           

            <Route  path="/uploadCrop" component={ProduceUpload}/>
            <Route  path="/Login/farmer" render={()=><Login isAuthenticated={store.getState().authReducer.loggedIn} role={"farmer"}/>}/>
            <Route  path="/Login/buyer" render={()=><Login isAuthenticated={store.getState().authReducer.loggedIn} role={"buyer"}/>}/>
            <Route  path="/Signup/farmer" render={()=><Signup isAuthenticated={store.getState().authReducer.loggedIn} role={"farmer"}/>}/>
            <Route  path="/Signup/buyer" render={()=><Signup isAuthenticated={store.getState().authReducer.loggedIn} role={"buyer"}/>}/>




            


           
        </div>

    );
};
