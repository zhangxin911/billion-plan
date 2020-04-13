import React ,{Component} from 'react';
import ChildComponent from './ChildComponent'

class UserGreeting extends Component{
	constructor(props){
		super(props)
		this.state={
			isLoggedIn:false
		}
	}
	 
	render(){
		return(<div>{this.state.isLoggedIn?<div>welcome usergreeting</div>:<div>welcome guest</div>}</div>) 
	}
}
 
export default UserGreeting