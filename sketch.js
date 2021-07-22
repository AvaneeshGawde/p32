const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;

function preload() {
    getBackgroundImg();
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){


    // add condition to check if any background image is there to add
if (backgroundImg){
    background(backgroundImg);


}
if(hour){
    textSize(30)
    text(hour,200,50)
}

    

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var rj = await response.json();
    var datetime=rj.datetime;
    console.log(datetime);
     hour = datetime.slice(11,13);
    if(hour>=6 && hour <= 8){   

      bg="sunrise1.png"  

    }else if (hour>23 && hour==0){

        bg="sunset10.png"
    }else if(hour> 0 && hour<3){
        bg="sunset11.png"

    }else if(hour>3 && hour<6){
        bg="sunset12.png"
    }else if(hour>8 && hour< 10){
        bg="sunrise2.png"
    }else if(hour>10 && hour<12){
        bg="sunrise3.png"
    }else if (hour>12 && hour<14){
        bg="sunrise4.png"

    }else if(hour>14 && hour<16){
        bg="sunrise5.png"

    }else {
        bg="sunset12.png"
    }
       
    
    backgroundImg=loadImage(bg);
}
