import React ,{Component,PureComponent} from 'react';

class PureCom extends PureComponent{
	constructor(props){super(props)
		 
	}
	 
	render(){
		console.log('PureCom render')
		return(<div>PureComponent {this.props.name}</div>)
	}
}
 
export default PureCom