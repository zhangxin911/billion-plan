import React ,{Component}from 'react';
import ComF from './ComF';
import {UserContext} from './UserContext'
 
class ComE extends Component{
	constructor(props){
		super(props);
		 
	}
	static contextType=UserContext;

	render(){ 
		 
		return (<div>
			E:{this.context}		 
			<ComF/>
		</div>)
	}
}

 
export default ComE