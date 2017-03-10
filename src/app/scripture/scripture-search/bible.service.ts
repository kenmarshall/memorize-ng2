import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BibleService {
	private bibleApi: string = 'http://localhost:9090/https://www.bibles.org/v2/eng-KJV/passages.js?q[]=';

	constructor(private http: Http) {

	}

	getScriptureTest(): Promise<string>{
		 return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(`#1# In the beginning God created the heaven and the earth.`), 2000);
  });
		
	}
	
	getScripture(verse: string): Promise<any> {
		let headers = new Headers();
		headers.append('Authorization', 'Basic ' + btoa('83qDmzMoeaBxucj9GtoYStGwpzyPzrbGoNSD25j9:dummy')); 
    let options = new RequestOptions({ headers: headers });
    this.bibleApi += encodeURIComponent(verse);
			

		return this.http.get(this.bibleApi, options)
							.toPromise()
							.then((res) => {
								console.log("response: ", res.json());
								return this.extractAndFormatResults(res.json());
							})
							.catch(this.handleError);
	}

	private extractAndFormatResults(data: any){
		let passage = data.response.search.result.passages[0];
		passage = this.extractRelevantData(passage);
		return passage;
	}

	private extractRelevantData(passage: any): any{
		return {
			copyright: this.removeHtmlAndTidy(passage.copyright),
			display: passage.display,
			text: this.removeHtmlAndTidy(passage.text)
		}
	}

	private removeHtmlAndTidy(text: string): string {
		let str = "";
		if(text){
			str = text.replace(/<sup.*?>(\d+)<\/sup>/gm, '#$1# ').replace(/<[^>]+>/gm, '');
		}
		return str;
	}

	private handleError(error: any): Promise<any> {
		console.log('An error occured', error);
		return Promise.reject(error.message || error);
	}
}