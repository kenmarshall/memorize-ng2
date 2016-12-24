import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BibleService } from './bible.service';

@Component({
  selector: 'app-scripture-search',
  templateUrl: './scripture-search.component.html',
  styleUrls: ['./scripture-search.component.css'],
  providers: [ BibleService ]
})
export class ScriptureSearchComponent implements OnInit {
	@Output() onSearchResult = new EventEmitter<any>();

  

	query: string;
  
  constructor(
  	private _bibleService: BibleService
  ) { }

  ngOnInit() {
  }

  search(query){  	
  	let p = this._bibleService.getScriptureTest();
    this.onSearchResult.emit(p);
  }

  onSubmit(){
 
  }

}
