import React ,{Component} from 'react';

class RegularCom extends Component{
	constructor(props){super(props)
		 
	}
	 
	render(){
		console.log('RegularCom render')
		return(<div>RegularCom {this.props.name}</div>)
	}
}
 
export default RegularCom