import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BibleService {
	private bibleApi: string = 'api/bible';

	constructor(private http: Http) {

	}

	getScriptureTest(): Promise<string>{
		 return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(`#1# In the beginning God created the heaven and the earth.`), 2000);
  });
		
	}
	
	getScripture(): Promise<string> {
		return this.http.get(this.bibleApi)
							.toPromise()
							.then(res => res.json().data)
							.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.log('An error occured', error);
		return Promise.reject(error.message || error);
	}
}