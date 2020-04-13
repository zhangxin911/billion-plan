import React ,{Component}from 'react';
import ComD from './ComD' 
 
import {UserProvider,UserConsumer} from './UserContext' 
class AllCTXCom extends Component{
	constructor(props){
		super(props);
		 
	}
	 
	render(){ 
		 
		return (<div>
				<UserProvider value="allctx">
					<ComD/>
				</UserProvider> 
			 
		</div>)
	}
}

 
export default AllCTXCom