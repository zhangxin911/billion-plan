import React ,{Component} from 'react';

function ChildComponent(props){
	return(
		<div>
			<button onClick={()=>{props.greetParent('child')}}>Greet Parent</button>
		</div>
	)
}
 
export default ChildComponent