import React ,{Component,PureComponent} from 'react';

// function FRInput (props){
// 	return(<div><input type="text"/></div>)
// }

var FRInput=React.forwardRef((props,ref)=>{
	return(<div><input type="text" ref={ref}/></div>)
})
 
export default FRInput