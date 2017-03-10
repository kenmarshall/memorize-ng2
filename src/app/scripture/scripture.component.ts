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

  handleSearchResult(res: Promise<any>){ 
    this.showLoader = true; 
     res.then((res) => {
       this.showLoader = false;
       this.searchResultData = res;
     }).catch( this.handleError ).catch(() => this.showLoader = false);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
 
    return Promise.reject(error.message || error);
  }

}
