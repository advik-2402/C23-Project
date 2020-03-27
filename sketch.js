const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var tallestRect1, tallestRect2; 
var tallRect1, tallRect2;
var shortRect1, shortRect2;
var shortestRect;
var square1, square2, sqaure3;
var smallTri1, smallTri2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  tallestRect1 = new Rect(140,250,20,350);
  tallestRect2 = new Rect(660,250,20,350); 
  tallRect1 = new Rect(200,325,80,275);
  tallRect2 = new Rect(600,325,80,275);
  shortRect1 = new Rect(280,345,80,205);
  shortRect2 = new Rect(520,345,80,205);
  shortestRect = new Rect(400,365,120,205);
  //square1 = new Square(400,345,20);
  //square2 = new Square();
  //square3 = new Square();
  //smallTri1 = new Triangle();
  //smallTri2 = new Triangle();
}

function draw() {
  background("black");
  Engine.update(engine);
  tallestRect1.display();
  tallestRect2.display();
  tallRect1.display();
  tallRect2.display();
  shortRect1.display();
  shortRect2.display();
  shortestRect.display();
  square1.display();
  square2.display();
  square3.display();
  smallTri1.display();
  smallTri2.display();
}