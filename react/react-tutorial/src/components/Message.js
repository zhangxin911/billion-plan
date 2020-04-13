import React ,{Component}from 'react';

// function Message(props){
// 	console.log(props) //object
// 	return <h1>Welcome visitor </h1>
// }
class Message extends Component{
	constructor(){
		super();
		this.state={
			message:'Welcome Visitor'
		}
	}
	changeMessage(){
		this.setState({
			message:'Thank u for sub'
		})
	}
	render(){
		return (<div>
			<h1>{this.state.message}</h1>
			<button onClick={()=>this.changeMessage()}>Subscribe</button>
		</div>)
	}
}

 
export default Message