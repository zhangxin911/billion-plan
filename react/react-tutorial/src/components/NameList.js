import React from 'react';

function NameList(){
	const name=['aa','bb','cc'];
	const arrDom=[];
	name.map((item)=>{
		arrDom.push(<li>{item}</li>)
	})
	return(
		<div><div>namelist</div><div>{arrDom}</div></div>
	)
}

export default NameList;