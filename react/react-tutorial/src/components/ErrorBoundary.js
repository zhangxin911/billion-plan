import React ,{Component} from 'react';

class ErrorBoundary  extends Component{

	constructor(props){super(props)
		 this.state={hasError:false}
	}
	static getDerivedStateFromError(err){
		return {hasError:true}
	}
	componentDidCatch(err){
		console.log(err)
	} 
	render(){
		if(this.state.hasError){
			return <div>error</div>;
		} 
		return this.props.children;
	}
}
 
export default ErrorBoundary 