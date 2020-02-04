import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
let listData=require('mockData/listData.js');

 
const reducer=function(state=listData,action){
	return state;
}

const store=createStore(reducer);

console.log(store.getState())

class Cart extends Component{
	componentWillMount(){
		let { contentData } =store.getState(),{content}=contentData;
		this.setState({
			contentData
		});
	}
	constructor(){
		super();

	}
	render(){
		let {content}=this.state.contentData,contentListDom=[];
		console.log(content)
		return (
			<div className="cart">
				<div className="cart-title">
					已选商品 <span>清空</span>
				</div>
				<div className="cart-list">
					
				</div>
				<div className="cart-discount">
					
				</div>
			</div>
		)
	}
}

export default Cart;