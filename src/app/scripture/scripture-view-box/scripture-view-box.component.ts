import { 
  Component, 
  OnChanges, 
  OnInit, 
  Input, 
  ViewChild, 
  ElementRef, 
  DoCheck, 
  AfterViewInit 
} from '@angular/core';


import { TextManagerService } from './text-manager.service';
import { TmHelperService } from './tm-helper.service';
import { TmTagWrapperService } from './tm-tag-wrapper.service';
import { TextElement } from './text-element';

import { ModalDirective } from 'ng2-bootstrap';


@Component({
  selector: 'app-scripture-view-box',
  templateUrl: './scripture-view-box.component.html',
  styleUrls: ['./scripture-view-box.component.css'],
 	providers: [ 
 		TextManagerService,
    TmHelperService,
    TmTagWrapperService
 	],

})
export class ScriptureViewBoxComponent implements OnInit {
	
  private _textElements: TextElement[];
	private _removeWordCount: number = 1;
	private _wordCountText: string = '1 word';

  @ViewChild('wordInput') wordInput: ElementRef;
  @ViewChild('staticModal') myModal: ModalDirective;
  
	@Input() 
	set data(data: any){
		this._textElements = this.textManager.initializeData(data.text);
	} 

  @Input() showLoader: boolean;
  
  constructor(
  	private textManager: TextManagerService,
   
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('change');
  }

  ngAfterViewInit(){
    console.log('afterviewinit');
    //this.myModal.show(); 
  }

  ngDoCheck(){

  }

  set removeWordCount(count: number) {    	
  	this._removeWordCount = (count < 0 || count > 3) ? 1: count;
  	this._wordCountText = (count > 1) ? `${count} words` : '1 word';
  }  

  get wordCountText(): string {
  	return this._wordCountText;
  }

  get textElements(): TextElement[] {
    return this._textElements;
  }

  reset(){
  	this._textElements = this.textManager.reset();
  }

  setFocus(){
    this.wordInput.nativeElement.focus();
  }

  submitWord(word: string){
  	this._textElements = this.textManager.checkWord(word); 
    if(this.textManager.isCompleted){
      this.myModal.show();
    }    
  }

  onSubmit(test){
   console.log("submit ", test);
  }

  removeRandomWords(el){

  	if(this.textManager.enableRemoveAction){
  	  this._textElements = this.textManager.removeRandomWords(this._removeWordCount);      
    }
   
  }

}
