class Population {
  
  constructor(target , mutationRate , maxPopu){
    this.population = [];
    this.generation = 0;
    this.reached = false;
    this.target = target;
    this.mutationRate = mutationRate;
    this.maxPopu = maxPopu;
    
    this.currBest = null;
    
    for(let i=0 ; i< this.maxPopu ; i++){
      this.population[i] = new DNA(this.target.length);
    }
  }
  
  calcFitness(){
    for(var i=0 ; i< this.population.length ; i++){
      this.population[i].calcFitness(this.target);
    }
  }
  
  
  naturalSelection(){
    
    
    this.matingPool = [];
    
    // find the max fitness
    this.maxFitness = 0;
    
    for(var i=0 ; i<this.population.length ; i++){
      if(this.population[i].fitness > this.maxFitness){
        this.maxFitness = this.population[i].fitness;
        this.currBest = this.population[i];
      }
    }
    
    this.checkIfReached();

    for(var i=0 ; i<this.population.length ; i++){
      const fitness = map(this.population[i].fitness,0,this.maxFitness,0,1);

      var n = floor(fitness * 100);
      for(var j=0 ; j<n ; j++ ){
        this.matingPool.push(this.population[i]);
      }
    }
  }
  
  
  generateChildren(){

    for(var i =0 ; i< this.population.length ; i++){
      var parent1 = this.matingPool[floor(random(0,this.matingPool.length))];
      var parent2 = this.matingPool[floor(random(0,this.matingPool.length))];

      var child = parent1.crossover(parent2);
      child.mutate(this.mutationRate);

      this.population[i] = child;
    }

    this.generation++;

  }
  
  
  checkIfReached(){
    for(var i=0 ; i<this.population.length ; i++){
      if(this.population[i].equals(this.target)){
        this.reached = true;
        this.result = this.population[i];
      }
    }
  }
  
  
}