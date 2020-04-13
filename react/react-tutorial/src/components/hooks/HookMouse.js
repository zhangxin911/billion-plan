import React ,{useState,useEffect} from 'react';

function HookMouse(){
	const [x,setX]=useState(0);
	const [y,setY]=useState(0);
	function logPos(e){
		setX(e.clientX)
		setY(e.clientY)
	}
	useEffect(()=>{
		window.addEventListener('mousemove',logPos);
	})
	return(<div>X:{x},Y:{y} <div ></div></div>)
}

export default HookMouse;