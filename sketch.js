var dog,dogImg,dogImg1;
var database;
var foodS = 20;
var foodStock 
var lastfed;
var  milk;

var feedFood, addFood;
var fedTime, lastfed;
var foodOBJ;

function preload(){
   dogImg=loadImage("images/dogImg.png");
   dogImg1=loadImage("images/dogImg1.png");
   back = loadImage('back.jpg')
  }


function setup() {
  database=firebase.database();
  createCanvas(1000,500);

  
  dog=createSprite(850,250);
  dog.addImage(dogImg);
  dog.scale=0.25;

  foodOBJ = new DogFood();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
}

function draw() {
  background(back);
  
  foodOBJ.display();
  foodOBJ.getFoodStock();
  foodOBJ.updateFoodStock(foodS);
  foodOBJ.deductFood();
  foodOBJ.getFoodStock();
  
  drawSprites();
  write();
}



function write() {
  
  fill('blue');
  textSize(35);
  text("Food remaining : "+ foodS,650,50);

  fill(0);
  // text(mouseX + "," + mouseY, width/2, height/2)
  if(lastfed == 12 || lastfed == 0){
    text("Last Feed: 12 AM", 100,50);
  }
  else if(lastfed >= 12){
    text("Last Feed: "+ lastfed % 12  + " PM", 100,50);
  }
  else{
    text("Last Feed: "+ lastfed + " AM", 100,50);
  }
}

function readStock(data){
  foodS=data.val();
  foodOBJ.updateFoodStock(foodS);
}