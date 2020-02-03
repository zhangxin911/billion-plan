import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Detail extends Component{
	constructor(props){
		super() 
	}
	componentWillMount(){
		console.log(this.props)
	}
	render(){
		console.log(this.props.match)
		return(
			<React.Fragment>
				<div>this is detail{this.props.match.params.foodId}</div>
			</React.Fragment>
		)
	}
}

export default Detail;