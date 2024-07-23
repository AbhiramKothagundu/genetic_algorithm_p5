var population;

function setup() {
  createCanvas(1000, 600);
  
  var target = "Pizzas are found in Space";
  var maxPopu = 1000;
  var mutationRate = 0.01;
  
  population = new Population(target,mutationRate,maxPopu);
}

function draw() {
  background(220);
  
  population.calcFitness();
  
  population.naturalSelection();
  
  population.generateChildren();
  
  
  if(population.reached){
    noLoop();
  }
  
  displayInfo();
}


function displayInfo(){
  
  var bestString = '';
  for(var i=0 ; i<population.currBest.gene.length ; i++){
    bestString += (population.currBest.gene[i]);
  }
  
  textFont('Courier');
  textSize(20);
  fill(0);
  text("Current Best Match : " , 8 , height/2 - 30);
  
  textFont('Verdana')
  textSize(25);
  fill(0);
  text(bestString , 10,height/2);
  
  
  for(var i=0 ; i<population.population.length ; i++){
    const thisGene = population.population[i];
    var currString = '';
    for(var j=0 ; j<thisGene.gene.length ; j++){
      currString += thisGene.gene[j];
    }
    
    textFont('Courier New')
    textSize(15);
    fill(0);
     text(currString, width/2,50 + 15 * i);
  }
  
}