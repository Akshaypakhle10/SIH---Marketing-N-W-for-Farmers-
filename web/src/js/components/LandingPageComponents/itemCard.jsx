import React  from "react";
import {Component} from "react";
import {Link,Redirect} from "react-router-dom"
import { connect } from "react-redux";
import produceService from "../../../ApiMiddleware/api/produceService";



class ItemCard extends Component {
  constructor(props){
    super(props)

    this.state={
      redirect:false
    }
  }
  

  onViewCropButton = (event) =>{
  
   this.setState({
        redirect:true
      })
   
  }
  functionToReturnImage=(type)=>{
    if(type == "wheat")
        return <img src={require(`../../../images/wheat.jpg`)}/>
    else if (type == "Rice")
        return <img src ={require(`../../../images/rice.jpg`)}/>
      else
        return <img src ={require(`../../../images/wheat.jpg`)}/>
  }

    render() {

      if(this.state.redirect)
        return <Redirect to={`/product/crop/${this.props.id}/${this.props.quantity}`}/>
      
        return(
        	
                <div className="col s4">
                  <div className="card" style={{"height":"40%"}}>
                  <div className="card-image" style={{"width":"","height":""}}>
                    
                     {this.functionToReturnImage(this.props.crop)}
                   

                   
                  </div>
                    
                    <div className="card-content">
                      <p>crop Name : {this.props.crop}</p>
                      <p>crop type : {this.props.type}</p>
                      <p>crop Quantity : {this.props.quantity}</p>
                      <div className="divider" />
                    <div className="card-content rating">
                      Rating: {(this.props.quantity)%5}/5
                    </div>

                    </div>
                    <div className="card-action">
                      <button className="btn btn-waves" onClick={this.onViewCropButton}>view</button>
                  </div>
                  
                </div>
                
            </div>

        )
    }

}

let select = (state) =>{

}

  
export default connect (select) (ItemCard);