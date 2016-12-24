import * as _ from "lodash";

export class WordCollection {
	private words: {word: string, position: number}[];
	private currentIdx: number;

	constructor(){
		this.words = [];
		this.currentIdx = -1;
		
	}

	get isFirst(): boolean {
		return this.currentIdx === 0 ? true: false;
	}

	reset(){
		this.currentIdx = -1;
	}

	sort(){
		this.words = _.sortBy(this.words, ['position']);
	}

	push(obj: {word: string, position: number}){
		this.words.push(obj);
	}

	getWords(){
		return this.words;
	}

	current(): {word: string, position: number} {
		return this.words[this.currentIdx];
	}

	next(): { word: string, position: number} {			
		return this.words[++this.currentIdx];
	}


}
