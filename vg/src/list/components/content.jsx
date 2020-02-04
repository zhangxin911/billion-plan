import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Link } from 'react-router-dom';

let listData=require('mockData/listData.js');
let {contentData}=listData;

class ListContent extends Component{
	componentWillMount(){
		this.setState({
			contentData
		});
	}
	constructor(props){
	  	super();
	  	this.addCart=this.addCart.bind(this);
	  	this.reduceCart=this.reduceCart.bind(this); 
	}
	addCart(index){
		let contentData=this.state.contentData,{content}=contentData,{food}=content[this.props.current-1];
		food[index].own++;
		this.setState({
			contentData
		})
	}
	reduceCart(index){
		let contentData=this.state.contentData,{content}=contentData,{food}=content[this.props.current-1];
		food[index].own<=0?food[index].own=0:food[index].own--;
		this.setState({
			contentData
		})
	}
	render(){
		let {content}=contentData,contentDom=[];
	 
		if(!!content[this.props.current-1]){
			let {food}=content[this.props.current-1];
			food.map((item,index)=>{
				let countDom=<div className="item-count"><div className="addToCart" onClick={()=>{this.addCart(index)}}>+</div></div>;
				if(item.own>0){
					countDom=<div className="item-count"><div className="reduceToCart" onClick={()=>{this.reduceCart(index)}}>-</div><span>{item.own}</span><div className="addToCart" onClick={()=>{this.addCart(index)}}>+</div></div>;
				} 
				 
				contentDom.push(
					// <Link to={`/detail/${0}`}  key={index}>
						<div className="content-item" key={index}>
							<img className="item-img"></img>
							<div className="item-info">
								<div className="item-name">{item.name}</div>
								<div className="item-detail">{item.detail}</div>
								<div className="item-discount">{item.discount}折</div>
								<div className="item-bottom">
									<div>¥{item.nowPrice} <span>¥{item.price}</span></div>
									{countDom}
								</div>
							</div>
						</div>
					// </Link>
					
				)
			})
		}else{
			contentDom=<div>暂无数据</div>
		}
		 
		

		return(
			<div className="list-content">
				{contentDom}
			</div>
		)
	}
}

export default ListContent;