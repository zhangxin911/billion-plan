import React ,{Component,useState,Fragment,useEffect} from 'react';
import	HookMouse from './HookMouse' 

function HooksCounter(){
	const [count,setCount]=useState(0);
	const [name,setName]=useState({firstName:'defaultF',lastName:'defaultL'});
	const [items,setItems]=useState([]);

 	const [time,setTime]=useState(0);

 	useEffect((e)=>{
 		console.log(time)
 		document.title=`${time}`
 	})

	function clickHandler(type){
		switch (type){
			case 'reset':
				setCount(0);
				break;
			case 'increment':
				setCount(count+1);
				break;
			case 'decrement':
				setCount(count-1);
				break;	
			case 'increment5':
				setCount(count+5);
				break;	
		}
	 	
	}
	// function inputHandler(e){
	// 	let val=e.target.value;

	// 	setName({firstName:val})
	// }
	function addItems(){
		setItems([...items,{
			id:items.length,
			value:Math.random()*10
		}])
	}
	 
	return(
		<Fragment>
		  <h3>Count:{count}</h3>
		  <div>
		  	<button onClick={()=>{clickHandler('reset')}}>Reset</button>
		  	<button onClick={()=>{clickHandler('increment')}}>Increment</button>
		  	<button onClick={()=>{clickHandler('decrement')}}>Decrement</button>
		  	<button onClick={()=>{clickHandler('increment5')}}>Increment5</button>
	  	  </div>
	  	  <h3>firstName:{name.firstName},lastName:{name.lastName}</h3>
		  <div>
		  	 <form>
		  	 	<input type="text" value={name.firstName} onChange={(e)=>{setName({firstName:e.currentTarget.val})}}/>
		  	 	<input type="text"  value={name.lastName} onChange={(e)=>{setName({lastName:e.currentTarget.val})}}/>
		  	 </form>
	  	  </div>
	  	   <h3>Array</h3>
	  	   <button onClick={addItems}>addItems</button>
		  <div>
		  	{
		  	 	items.map((item)=>{
		  	 		return <li>{item.id}{item.value}</li>
		  	 	})
		  	}
	  	  </div>
	  	   <h3>after render</h3>
	  	   <button onClick={()=>{setTime(time+1)}}>addTime</button>
		  <div>
		  	{
		  	 	items.map((item)=>{
		  	 		return <li>{item.id}{item.value}</li>
		  	 	})
		  	}
	  	  </div>
	  	  <div>
	  	  	<HookMouse/>
	  	  </div>
		</Fragment>
		)
}
 
export default HooksCounter