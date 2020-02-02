import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

let listData=require('mockData/listData.js');
 
class ListMenu extends Component{
	componentWillMount(){
		this.setState({
			listData,
			current:5
		});
	}
	construtor(props){
		 this.changeMenu=this.changeMenu.bind(this);
	}
	changeMenu(val){
		this.setState({
			current:val
		})
	}
	render(){
		let listDom = [],{ listData }=this.state,{ list }=listData;

		list.map((item)=>{
			let menuClass=item.id==this.state.current?'list-menu-item current':'list-menu-item';
			listDom.push(<div className={menuClass}  onClick={()=>{this.changeMenu(item.id)}}  key={item.id}>{item.name}</div>);
		});

		return (
			<div className="list-menu">{listDom}</div>
		)
	}
}

export default ListMenu;