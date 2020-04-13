import React ,{Component,memo} from 'react';

function MemoCom(props){
	console.log('memo render')
	return(<div>Memo{props.name}</div>)
}
 
export default memo(MemoCom)