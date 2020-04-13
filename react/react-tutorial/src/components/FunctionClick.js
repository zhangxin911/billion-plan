import React ,{Component} from 'react';

function FunctionClick(){
	function clickHandler(){
		console.log('FunctionClick button click')
	}
	return(
		<div><button onClick={clickHandler}>FunctionClick</button></div>
	)
}
export default FunctionClick