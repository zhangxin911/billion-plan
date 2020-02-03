import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import '@/app.less';

import Order from '@/order/order.jsx'; 
import List  from '@/list/list.jsx';
import Detail from '@/detail/detail.jsx';

let listData=require('mockData/listData.js');
 
class App extends Component{
   constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="main">
            	<Router >
            		<Route path="/" exact component={List}></Route>
            		<Route path="/detail/:foodId" component={Detail}></Route>
            	</Router> 
            	          	 
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))