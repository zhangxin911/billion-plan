import React from 'react';

function Greet(props){
	console.log(props) //object
	const {name,children}=props;
	return <h1>Function Component {name} {children}</h1>
}

const Greet1 = ()=> <h1>Hello Vishwas1</h1>;
const Hello =function(){
	return React.createElement('div',null,'h1','React CreateElement');
}

// export default Greet;
export {Greet,Greet1,Hello}