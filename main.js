canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
 
rover_width = 100;
rover_height = 90;

background_img = "mars.jpg";
rover_img = "rover.png";

rover_x = 10;
rover_y = 10;

function add() 
{
    background_imgTag = new Image() ;
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    rover_imgTag = new Image() ;
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_img;
}

function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
    }

    window.addEventListener("keydown",my_keydown);

    function my_keydown(e){
        keypressed = e.keyCode;   
        
        
        console.log(keypressed)



        if (keypressed == '38'){
            console.log("up");
            if(rover_y>0){
                rover_y -= 10;
                uploadBackground();
                uploadRover();
                }
        }



        if (keypressed == '40'){
            console.log("down");
            if(rover_y+90<600){
                rover_y += 10;
                uploadBackground();
                uploadRover();
            }
        }



        if (keypressed == '37'){
            console.log("left");
            if(rover_x>0){
                rover_x-= 10;
                uploadBackground();
                uploadRover();
                }
        }



        if (keypressed == '39'){

            console.log("right");


            if(rover_x+100<800){
                rover_x += 10;
                uploadBackground();
                uploadRover();
                }
        }
    }

   