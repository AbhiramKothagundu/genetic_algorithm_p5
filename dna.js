class DNA {
  
  constructor(size){
    this.gene = []; 
    this.fittness = 0;
    
    for(let i=0; i<size ; i++){
      this.gene[i] = newChar();
    }
  }
  
  calcFitness(target){
    let score = 0;
    for(var i=0 ;i<target.length ; i++ ){
      if(this.gene[i] == target[i]){
        score++;
      }
    }
    this.fitness = score / target.length;
  }
  
  crossover(parent2){
    //random mid
    const n = this.gene.length;
    var newGene = new DNA(n);
    
    const mid = floor(random(n));
    
    for(var i=0 ; i<n ; i++){
      if(i < mid){
        newGene.gene[i] = this.gene[i];
      }else{
        newGene.gene[i] = parent2.gene[i];
      }
    }
    
    return newGene;
  }
  
  mutate(mutaionRate){
    for(var i=0 ; i<this.gene.length ; i++){
      if(random(1) < mutaionRate){
        this.gene[i] = newChar();
      }
    }
  }
  
  equals(target){
    
    for(var i=0 ; i<target.length ; i++){
      if(this.gene[i] != target[i]){
        return false;
      }
    }
    
    return true;
  }
  
}


function newChar(){
  let rand = floor(random(63,123));
  if(rand === 63) rand = 32;
  if(rand === 64) rand = 46;
  
  return String.fromCharCode(rand);
}