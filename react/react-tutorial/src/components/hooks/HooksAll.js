import React ,{Component,useState,Fragment} from 'react';
import HooksCounter from './HooksCounter';

function HooksAll(){
	const [count,setCount]=useState(0);
	function clickHandler(val){
	 	setCount(val+1);
	}
	return(
		<Fragment>
		<div><button onClick={()=>{clickHandler(count)}}>Count:{count}</button></div>
		<div>
			<h3>hooks counter</h3>
			<HooksCounter/>
		</div>
		</Fragment>
		)
}
 
export default HooksAll