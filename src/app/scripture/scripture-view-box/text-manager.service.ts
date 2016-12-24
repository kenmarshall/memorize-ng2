import { Injectable } from '@angular/core';

import { TmHelperService } from './tm-helper.service';
import { TmTagWrapperService } from './tm-tag-wrapper.service';
import { WordCollection } from './word-collection';
import { TextElement } from './text-element';




@Injectable()
export class TextManagerService {
	

  private wordPositions: number[];
	private removeWords: WordCollection;
 	private text: string;
	private textArray: TextElement[];
  private _isCompleted: boolean;
  
  private _enableRemoveAction: boolean = true;



  constructor(
  	private tmHelper: TmHelperService,
    private tmTW: TmTagWrapperService
  ) { }

  initializeData(data: string): TextElement[] {
  	let wordRegex = /[a-z]+/i;
    let verseNumberReg = /#(\d+)#/;

    this.removeWords = new WordCollection();
    this.text = this.tmHelper.parseData(data);
  	this.textArray = this.text.split(' ').map((e) => {
      let type = 'normal';
      let value = e;
      
      if(verseNumberReg.test(e)){
        type = 'verseNumber'
        value = e.replace(verseNumberReg, '$1');
      }

      return {value: value, type: type}
    });
    this._enableRemoveAction = true;
    this._isCompleted = false;

  	this.wordPositions = this.tmHelper.extractIndices(this.textArray, wordRegex);
    
  	return this.textArray;
  }

  reset(): TextElement[] {
    return this.initializeData(this.text);
  }

  removeRandomWords(count): TextElement[] {  	
    if(this._enableRemoveAction){
      let res: TextElement[];
      count = (count > this.wordPositions.length) ? this.wordPositions.length : count;
      for (; count >= 1; count--) {
    		this.handleRemoveWords();
  	  }       
      res = this.showNextInput(this.removeWords, this.textArray, this.tmTW); 
      this._enableRemoveAction = false;     
      return res; 
    } 	
  }

  checkWord(word: string): TextElement[] {
    word = word.trim();
    let reg = new RegExp(`${word}`, 'i');
    let current = this.removeWords.current();
    let res: TextElement[] = this.textArray;
    if(reg.test(current.word)){      
      res = this.showNextInput(this.removeWords, this.textArray, this.tmTW);
      if(!this.removeWords.current()) { 
        if(!this.wordPositions.length) { this._isCompleted = true; }
        this._enableRemoveAction = true;
      } 
               
    }else{
      // To show incorrect and allow to try again;
    }
    return res;
  }

  get enableRemoveAction(): boolean {
    return this._enableRemoveAction;
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  private handleRemoveWords(){
    let positionIndex = this.tmHelper.getRandomIndex(this.wordPositions);
    let position = this.wordPositions[positionIndex];
    let word = this.textArray[position];    
    
    this.removeWords.push({word: word.value, position: position}); 
    this.wordPositions.splice(positionIndex, 1);

    this.removeWords.getWords().forEach((e) => {
      this.textArray[e.position].type = 'removed';
    })

    this.removeWords.sort();
    this.removeWords.reset();
  }

  private showNextInput(removeWords: WordCollection, splittedText: TextElement [], tagWrapper: TmTagWrapperService): TextElement[]{ 
    let currentRemovedWord = removeWords.current();    
    let nextRemovedWord = removeWords.next();  
    
    if(nextRemovedWord){ 
       splittedText[nextRemovedWord.position].type = 'input';
    }       

    if (currentRemovedWord){     
      splittedText[currentRemovedWord.position].type = 'normal';
    }

    return splittedText;
  }

 

  

  

}
