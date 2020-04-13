import React ,{Component} from 'react';

class ClassClick extends Component{
	constructor(){super()}
	clickHandler(val){
		console.log('ClassClick button click')
		console.log(val)
	}
	render(){
		return(<div><button onClick={()=>{this.clickHandler(11)}}>ClassClick</button></div>)
	}
}
 
export default ClassClick