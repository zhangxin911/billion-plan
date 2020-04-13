import React ,{Component,Fragment,PureComponent} from 'react';
import PureCom from './PureComponent'
import RegularCom from './RegularCom'
import MemoCom from './MemoCom'

class ParentComp extends PureComponent{
	constructor(props){super(props)
		this.state={
			name:'vishwas'
		}
	}
	componentDidMount(){
		setInterval(()=>{
			this.setState(function(){
				console.log(111)
				return{
					name:'vishwas++'
				}
			})
		},2000)
	}

	render(){
		return(<Fragment><div>{this.state.name}

			</div> <PureCom name={this.state.name}/>

      <RegularCom name={this.state.name}/><MemoCom name={this.state.name}/></Fragment>
      )
       
	}
}
 
export default ParentComp