import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import './cart.less';

let {listData,cartData}=require('mockData/listData.js');
// let cartData=require('mockData/cartData.js');
 
const reducer=function(state=cartData,action){
	console.log(state,action);

	switch (action.type){
		case 'addCart':
			(()=>{
				state.cart[action.payload.index].own=action.payload.own;
				return state;
			})()
			break;
		default:break;
	}
	return state;
}

const store=createStore(reducer);



class Cart extends Component{

	componentWillMount(){
		let cartData=store.getState();
		this.setState({
			cartData
		})
	}

	constructor(){
		super();
		this.add=this.add.bind(this);
		store.subscribe(()=>{
			this.setState({
				cartData:store.getState()
			})
		});
	}
	add(val,index){
		
		const action={
			type:'addCart',
			payload:{
				own:val,
				index:index
			}
		}
		store.dispatch(action)

	}
	render(){
		let cartDom=[],{cart}=this.state.cartData;
		console.log(cart)
		cart.map((item,index)=>{
			cartDom.push(
				<div className="cart-item" key={index}>
					<div className="cart-item-l">
						<img className="cart-item-pic" src='#'></img>
						<div className="cart-item-detail"> 
							<div>{item.name}</div>
							<div>{item.nowPrice*item.own}</div>
						</div>
					</div>
					<div className="cart-item-r">
						<div className="reduce">-</div>{item.own}<div className="add" onClick={()=>{this.add(++item.own,index)}}>+</div>
					</div>
				</div>
			)
		})
		return (
			<div className="cart">
				<div className="cart-mask">
					
				</div>
				<div className="cart-content">
					<div className="cart-title">
					已选商品 <span>清空</span>
					</div>
					<div className="cart-list">
						{cartDom}
					</div>
					<div className="cart-discount">
						
					</div>
				</div>
				
			</div>
		)
	}
}

export default Cart;