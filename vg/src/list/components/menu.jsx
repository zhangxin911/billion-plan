import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

let listData=require('mockData/listData.js');
let {menuData}=listData;
 

class ListMenu extends Component{
	componentWillMount(){
		 
		this.setState({
			menuData,
			current:this.props.current
		});
	}
	constructor(props){
		 super();
		
		 this.changeMenu=this.changeMenu.bind(this);
	}
	changeMenu(val){
		this.props.changeTab(val);
		 
	}
	render(){

		let listDom = [],{ menuData }=this.state,{ menu }=menuData;
		 
		menu.map((item)=>{
			let menuClass=item.id==this.props.current?'list-menu-item current':'list-menu-item';
			listDom.push(<div className={menuClass}  onClick={()=>{this.changeMenu(item.id)}}  key={item.id}>{item.name}</div>);
		});

		return (
			<div className="list-menu">{listDom}</div>
		)
	}
}

export default ListMenu;