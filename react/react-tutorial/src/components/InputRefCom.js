import React ,{Component,PureComponent} from 'react';

class InputRef extends PureComponent{
	constructor(props){super(props)
		 this.inputRef=React.createRef();
		 
	}
	focusInput(){
		this.inputRef.current.focus();
	}
	render(){
		 
		return(<div>inputRef:<input type="text" ref={this.inputRef}/></div>)
	}
}
 
export default InputRef