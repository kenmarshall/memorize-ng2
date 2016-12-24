import { Injectable } from '@angular/core';

@Injectable()
export class TmHelperService {

  constructor() { }

	/*
		Returns an array of indices that match the given regex, from the given array	
	*/
  extractIndices(array , reg): number[]{
  	let indices = [];
  	for (var i = 0; i < array.length; i++) {
  		if(reg.test(array[i].value)){
        indices.push(i);
      }
  	}  	
  	return indices;
  }

  createIterable(objs: string[] ){
    let nextIndex = -1;
    let currentIndex = -1;  
    
    return { 
      next: function (){        
        currentIndex = nextIndex;
        return objs[++nextIndex];
      },
      
      current: function (){
        if(currentIndex < 0) { return objs[0]; }
        return objs[currentIndex];
      }
    };
  }

  

  updateNextElementInArray(array, position, action){
     
    
  }



  /*
		convert data to a text format that can be easily manipulated.


  */
  parseData(data): string {
  	return data;
  }

  getRandomIndex(array){
  	 return Math.floor(( Math.random() * (array.length-1) ) + 0);
  }

}
