import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import '@/list/list.less';

import ListMenu from '@/list/components/menu.jsx';
import ListContent from '@/list/components/content.jsx';
 
class List extends Component{
	componentWillMount(){
		this.setState({
			current:1
		});
	}
	constructor(){
		super();
		this.changeTab=this.changeTab.bind(this);
	}
	changeTab(val){
		this.setState({
			current:val
		})
	}
	render(){
		return(
			<React.Fragment>
				<div className="list">
					<ListMenu current={this.state.current} changeTab={this.changeTab}></ListMenu>
					<ListContent  current={this.state.current}></ListContent>
				</div>
				
			</React.Fragment>
		)
	}
}

export default List;