import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import '@/list/list.less';

import ListMenu from '@/list/components/menu.jsx';

class List extends Component{
	construtor(){
		 
	}
	render(){

		
		 
		return(
			<React.Fragment>
				<div className="list">
					<ListMenu></ListMenu>
					<div className="list-content"></div>
				</div>
				
			</React.Fragment>
		)
	}
}

export default List;