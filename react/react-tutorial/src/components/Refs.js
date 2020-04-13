import React ,{Component,PureComponent} from 'react';
import InputRef from './InputRefCom';
import FRInput from './FRInput'
class RefsCom extends PureComponent{
	constructor(props){super(props)
		 this.inputRef=React.createRef();
		 this.cbRef=null;
		 this.setCbRef=el=>{
		 	this.cbRef=el;
		 }
		 this.componentRef=React.createRef();
		 this.inputRef1=React.createRef();
		 this.clickHandler=this.clickHandler.bind(this)
		 this.clickHandler1=this.clickHandler1.bind(this)
		 
	}
	componentDidMount(){
		if(this.cbRef){console.log(this.cbRef);this.cbRef.focus()}
		
	}
	clickHandler(){
		this.componentRef.current.focusInput()
	}
	clickHandler1(){
		// console.log(this.inputRef1);
		this.inputRef1.current.focus()
	}  
	render(){
		 
		return(<div><input type="text" ref={this.inputRef}/> <input  type="text" ref={this.setCbRef}/><InputRef ref={this.componentRef}/>
			<button onClick={this.clickHandler}>inputRef</button>
			<div>FRInput<FRInput ref={this.inputRef1} /><button onClick={this.clickHandler1}>FRInput</button></div>
			</div>)
	}
}
 
export default RefsCom