const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg)
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API

    var response=await fetch ("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    //change the data in JSON format

    // write code slice the datetime
    
        var responseJSON=await response.json();
        console.log(responseJSON)
        var datetime=responseJSON.datetime
        var hour=datetime.slice(11,13);
        if(hour>=06&&hour<=08){
        bg="sunrise1.png"
        }
        else if(hour>=08&&hour<=10){
            bg="sunrise2.png"
            }
            else if(hour>=10&&hour<=12){
                bg="sunrise3.png"
                }   
                else if(hour>=12&&hour<=02){
                    bg="sunrise4.png"
                    }
                    else if(hour>=02&&hour<=04){
                        bg="sunset7.png"
                        }
                        else if(hour>=04&&hour<=06){
                            bg="sunset8.png"
                            } else if(hour>=06&&hour<=08){
                                bg="sunset9.png"
                                }
            
        
        backgroundImg=loadImage(bg)
        
       

    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
