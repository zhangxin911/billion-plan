import React ,{Component}from 'react';
import WithCounter from './withCounter'
 
class HoverCounter extends Component{
	constructor(props){
		super(props);
		 
	}
	 
	render(){ 
		let {count,increment}=this.props;
		return (<div>
				 
			 <h2 onMouseOver={()=>{increment()}}>hover {count}times {this.props.name}</h2>
		</div>)
	}
}

 
export default WithCounter(HoverCounter)