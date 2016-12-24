import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scripture',
  templateUrl: './scripture.component.html',
  styleUrls: ['./scripture.component.css']
})
export class ScriptureComponent implements OnInit {
  searchResultData: string;
  showLoader: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleSearchResult(res: Promise<string>){ 
    this.showLoader = true; 
    console.log('searvh res');  
     res.then((res) => {
       this.showLoader = false;
       this.searchResultData = res
     });
  }

}
