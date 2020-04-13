import React ,{Component}from 'react';
import WithCounter from './withCounter' 
import User from './User'

class HOCClickCounter extends Component{
	constructor(props){
		super(props);

		 
	}
	 
 
	render(){
		let {count,increment}=this.props;
		return (<div>
				<div>HOCClickCounter</div>
			 <button onClick={()=>{increment()}} >click {count} times</button>
			 <User name={(val)=>val?'true':'false'}></User>
			 
		</div>)
	}
}

 
export default WithCounter(HOCClickCounter)