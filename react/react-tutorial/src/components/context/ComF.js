import React ,{Component}from 'react';
 import {UserConsumer} from './UserContext' 
 
class ComF extends Component{
	constructor(props){
		super(props);
		 
	}
	 
	render(){ 
		 
		return (<div>
				 
			 <UserConsumer>
			 	{
			 		(username)=>{
			 			return <div>Hello {username}</div>
			 		}
			 	}
			 </UserConsumer>
		</div>)
	}
}

 
export default ComF