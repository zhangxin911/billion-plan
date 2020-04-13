import React from 'react';
import ReactDOM from 'react-dom';

function Heros(props){
	const {name}=props;
	if(name!=='joker'){throw new Error('not a hero')}
	return(<div>{name}</div>);
}

export default Heros;