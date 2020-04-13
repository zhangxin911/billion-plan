import React ,{Component}from 'react';
import WithCounter from './withCounter' 

class User extends Component{
	constructor(props){
		super(props);

		 
	}
	 
 
	render(){
		 return(<div>{this.props.name(false)}</div>)
	}
}

 
export default User