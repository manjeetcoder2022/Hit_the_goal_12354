var canvas=new fabric.Canvas("myCanvas")

ball_x=10
ball_y=10

hole_x= 400
hole_y=600

block_image_width = 5;
block_image_height = 5;

hole_upload=''
function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){

		hole_upload=Img
		hole_upload.scaleToWidth(50)
		hole_upload.scaleToHeight(50)

		hole_upload.set({

	top:hole_x,
	left:hole_y

})
canvas.add(hole_upload)
new_image()
	})	
}
ball_upload=''

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){

		ball_upload=Img
		ball_upload.scaleToWidth(50)
		ball_upload.scaleToHeight(50)
		
		ball_upload.set({
		
			top:ball_x,
			left:ball_y
		
		})
		canvas.add(ball_upload)
	
			})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	console.log('x' + ball_x + 'y' + ball_y)

	
	 {
		 if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		if(keyPressed=='32'){
			space()
		}
	}
	
	function up(){

	
	if(ball_x == hole_x  && ball_y==hole_y){
    
		console.log("hii")
		canvas.remove(ball_upload)
		document.getElementById("over").style.display='block'
	 }
		else if(ball_x>10){
			ball_x=ball_x-10
			canvas.remove(ball_upload)
			new_image()
			
			 }

	}
}
	function down()
	{
		if((ball_x == hole_x ) && (ball_y==hole_y)){
    
			console.log("hii")
			canvas.remove(ball_upload)
			document.getElementById("over").style.display='block'
		 }
			else if(ball_x<430){
			ball_x=ball_x+10
			canvas.remove(ball_upload)
			new_image()
			
			 }
	}

	function left()
	{
		if((ball_x == hole_x ) && (ball_y==hole_y)){
    
			console.log("hii")
			canvas.remove(ball_upload)
			document.getElementById("over").style.display='block'
		 }
			else if(ball_y >10)
		{
			ball_y=ball_y-10
			canvas.remove(ball_upload)
			new_image()
			
		}
	}

	function right()
	{
		if((ball_x == hole_x ) && (ball_y==hole_y)){
    
			console.log("hii")
			canvas.remove(ball_upload)
			document.getElementById("over").style.display='block'
		 }
			else if(ball_y <830)
		{
			ball_y=ball_y+10
			canvas.remove(ball_upload)
			new_image()
		
		}
	}
	

	 function space(){
		document.getElementById("over").style.display='none'
		ball_x=10
		ball_y=10
		new_image()
	 }