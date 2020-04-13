import React ,{Component}from 'react';

// function Message(props){
// 	console.log(props) //object
// 	return <h1>Welcome visitor </h1>
// }
class Form extends Component{
	constructor(){
		super();
		this.state={
			username:'',
			comments:'',
			topic:'Vue'
		}
		this.handlerUserName=this.handlerUserName.bind(this);
		this.handlerComments=this.handlerComments.bind(this);
		this.handlerTopic=this.handlerTopic.bind(this);
		this.handlerSubmit=this.handlerSubmit.bind(this);
	}
	handlerUserName(e){
		 let val=e.currentTarget.value
		this.setState(function(){return{username:val}})
	}
	handlerComments(e){
		this.setState({
			comments:e.currentTarget.value
		})
	}
	handlerTopic(e){
		this.setState({
			topic:e.currentTarget.value
		})
	}
	handlerSubmit(e){
		alert(this.state.topic+this.state.username+this.state.comments)
	}
	render(){
		return (<div>
			<form onSubmit={this.handlerSubmit}>
				<div>
					<label>Useranem</label><input type='text' value={this.state.username} onChange={this.handlerUserName}/></div>
				<div>
					<label>Comments></label>
					<textarea value={this.state.comments} onChange={this.handlerComments}></textarea>
				</div>
				<div>
					<label>Topic></label>
					<select value={this.state.topic} onChange={this.handlerTopic}>
						<option value="React">React</option>
						<option value="Angular">Angular</option>
						<option value="Vue">Vue</option>
					</select>
				</div>
				<button type="submit">submit</button>
			</form>
		</div>)
	}
}

 
export default Form