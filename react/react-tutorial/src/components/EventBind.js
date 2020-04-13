import React ,{Component} from 'react';

class EventBind extends Component{
	constructor(props){super(props)
		this.state={
			message:'hello'
		}
	}
	clickHandler(val){
		 this.setState(function(){
		 	return {
		 		message:'bye'
		 	}
		 })
	}
	render(){
		return(<div>{this.state.message}<button onClick={()=>{this.clickHandler(11)}}>EventBindClick</button></div>)
	}
}
 
export default EventBind