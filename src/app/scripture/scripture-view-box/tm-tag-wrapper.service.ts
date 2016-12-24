import { Injectable } from '@angular/core';

@Injectable()
export class TmTagWrapperService {

  constructor() { }

  wrap(str: string, tag: string, attributes: string =""): string {
  	return str.replace(/.+/i, `<${tag} ${attributes}>$&</${tag}>`);
  }

  replace(str: string, tag: string, attributes: string = ""): string {
    return str.replace(/.+/i, `<${tag} ${attributes}></${tag}>`);
  }

  convertToHtml(str: string): string {
  	str = this.convertVerseNumbers(str);
  	return str;
  }

  correctWordTag(str: string): string {
    let res = this.removeInputTag(str);
    return this.wrap(res, "span", `class="correct-word"`);
  }

  wrongWordTag(str: string): string {
    return this.wrap(str, "span", `class="wrong-word"`);
  }

  convertVerseNumbers(str: string): string {
  	return str.replace(/#(\d+)#/g, (m, p1) => {
  		return this.wrap(p1, "sup", `class="verseNumber"`)
  	});
  }

  inputTag(str: string): string {
  	let res = this.replace(str, "input", `type="text" id="wordInput" autofocus style="width: ${str.length*25}px; font-size: 25px; text-align: center"` );
    console.log("str ", str);
    return res = this.wrap(res, "span");
    
  }

  removeInputTag(str: string): string {
  	return str.replace(/<input.*?>(.+)<\/input>/, "$&");
  }

  unwrap(str: string): string {
  	return str.replace(/<sup.*?>(\d+)<\/sup>|<input.*?>(.+)<\/input>/g, (m, p1, p2) => {
			if (p1) return `#${p1}#`;
			if (p2) return `@${p2}@`;
		});
  }
  

}
