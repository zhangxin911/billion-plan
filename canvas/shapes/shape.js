class dot{
	constructor(x,y,ctx){
		this.x=x;
		this.y=y;
		this.ctx=ctx;
	}


	renderDot(){

		const style={
			width:10,
			height:10,
			fillColor:'red',
			borderColor:'black',
			borderWidth:1
		}
		const x=this.x,y=this.y;
		this.ctx.fillStyle=style.fillColor;
        this.ctx.strokeStyle=style.borderColor;
        this.ctx.lineWidth=style.borderWidth;
        this.ctx.fillRect(x,y,style.width,style.height);
        this.ctx.strokeRect(x,y,style.width,style.height);
	
	}

	moveDot(){
		this.ctx.clearRect(this.x,this.y,10,10);
	}
}

class shapeL{
	constructor(ctx){
		this.shape=[	 
				[0,0,1,0,2,0,0,1],
				// [0,0,0,1,0,2,1,0],
				// [0,0,1,0,1,1,1,2],
				// [2,0,0,1,1,1,2,1]
		]
		this.ctx=ctx;
		 
	}

	drawShape(){
		// gameDot.moveDot()
		this.ctx.clearRect(0,0,400,400)
		this.shape.map((item)=>{
			let judge=2;

			for(let i=0;i<item.length;i=i+2){
				let x=item[i]*10,y=item[i+1]*10;
				const gameDot=new dot(x,y,this.ctx);
				gameDot.renderDot()				 
			}
			 
			
		})

	}

	shapeMove(){
		 
		// 
	 	this.shape=this.shape.map((item)=>{

	 		return item.map((sItem,sIndex)=>{
	 			 
	 			if(sItem==20){

	 			}else{
	 				if((sIndex+1)%2==0){
 						sItem=sItem+2;
		 			}
					return sItem;
	 			} 
	 			

	 			
	 			
			})
			 
	 	})
 		 
	}
}

// class shapeO{

// }

class table{
	constructor(){
		this.body=document.querySelector('body');
		this.canvas=document.querySelector('canvas');
		this.ctx=this.canvas.getContext('2d');
	}
	renderCanvas(){
		const canvasDOM=`<canvas id="canvas" width="400" height="400"></canvas>`;
		console.log(document.querySelector('body'))
		document.querySelector('body').appendChild='11';
	}



	drawGame(){
		const ctx=this.ctx;
		 
		const shapel=new shapeL(ctx);
		 
		setInterval(function(){
			
			shapel.drawShape();
			shapel.shapeMove();
		},1000)
		// window.requestAnimationFrame();

	}

	startGame(){
		const that=this;
		// window.requestAnimationFrame(function(){
		// 	that.drawGame()
		// }) 
		// setInterval(function(){
			that.drawGame()
		// },1000)
	}
}

window.onload=function(){
	const game=new table();
	game.startGame();
	// window.requestAnimationFrame(function(){
	
	// })  
	
} 

 

