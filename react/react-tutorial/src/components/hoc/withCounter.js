import React ,{Component}from 'react';

const UpdatedComponent=(OriginalCom)=>{
	class NewComponent extends Component{
		constructor(props){
			super(props);
			this.state={
				count:0
			} 
		}
		increment=()=>{
			this.setState(function(preState,props){
				return{
					count:preState.count+1
				}
			})
		}
		render(){
			return(<OriginalCom  count={this.state.count}  increment={this.increment} name="origin"/>)
		}
	}
	return NewComponent;
}

export default UpdatedComponent;