import React ,{Component}from 'react';

// function Message(props){
// 	console.log(props) //object
// 	return <h1>Welcome visitor </h1>
// }
class Counter extends Component{
	constructor(props){
		super(props);
		this.state={
			count:0
		} 
	}
	 
	increment(){
		// this.setState({
		// 	count:++this.state.count
		// })
		 
		// this.setState((preState,props)=>({
		// 	count:preState.count+Number(this.props.addStep)
		// }))
		this.setState(function(preState,props){
			return{
				count:preState.count+Number(this.props.addStep)
			}
		})
	}
	render(){ 
		return (<div>
			 {this.state.count}
			 <button onClick={()=>{this.increment()}}>increment</button>
		</div>)
	}
}

 
export default Counter