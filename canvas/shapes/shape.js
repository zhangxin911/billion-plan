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
				[0,0,0,1,0,2,1,0],
				[0,0,1,0,1,1,1,2],
				[2,0,0,1,1,1,2,1]
		];
		this.currentShape=this.shape[0];
		this.ctx=ctx;
		this.periods=0; 
	}

	drawShape(index){
		// gameDot.moveDot()

		this.ctx.clearRect(0,0,400,400)

		let judge=2 ;

		for(let i=0;i<this.currentShape.length;i=i+2){
			let x=this.currentShape[i]*10,y=this.currentShape[i+1]*10;
			const gameDot=new dot(x,y,this.ctx);
			gameDot.renderDot()				 
		}
		this.shapeDown(index);
		
	}

	shapeDown(index){
		
		this.changeShape(index);

		if(this.reachBottom()){

		 	
		 		 
		}else{
			console.log(this.currentShape)

			this.currentShape=this.currentShape.map((item,index)=>{

	 			if((index+1)%2==0){
					item=item+1;
	 			}
	 			this.periods++; 
				return item;	
			})
		}
		
 		 
	}
	reachBottom(){
		return this.currentShape.some((item)=>{
			if(item==10||item+1==10||item-1==10){
				return true
			}else{	
				return false;
			}
			 
		})
	}
	changeShape(index){
		const that=this,indexs=[0,1,2,3];let i=0;
		document.onkeydown=function(event){ 
			index<3?index++:index=0;	 
		 	that.currentShape=that.shape[index];
		 	const next=that.periods/8;
			console.log(that.currentShape,that.periods)
			that.currentShape=that.currentShape.map((item,index)=>{
				if((index+1)%2==0){
					item=item+1;
	 			}
	 			return item;
			})
			that.periods--;
			 
		 	that.drawShape(index);
		}
		// switch(keyCode){
  //               case 1:
  //               case 38:
  //               case 269: //up
  //                   return 'up';
  //                   break;
  //               case 2:
  //               case 40:
  //               case 270:
  //                   return 'down';
  //                   break;
  //               case 3:
  //               case 37:
  //               case 271:
  //                   return 'left';
  //                   break;
  //               case 4:
  //               case 39:
  //               case 272:
  //                   return 'right';
  //                   break;
  //               case 339: //exit
  //               case 240: //back
  //                   return 'back';
  //                   break;
  //       }
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
		

		let index=0;

		setInterval(function(){
			
			shapel.drawShape(index);
			
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

 

