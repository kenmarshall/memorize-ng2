import { 
	Component, 
	OnInit, 
	Input, 
	Output, 
	EventEmitter, 
	DoCheck, 
	AfterViewInit, 
	ElementRef, 
	ViewChild
} from '@angular/core';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.css']
})
export class WordInputComponent implements OnInit {

  @Input() length: number;

  @Output() onSubmit = new EventEmitter<any>();

  @ViewChild('scriptInput') wordInput: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	console.log('after view init ', this.wordInput.nativeElement.focus());

  }

  ngDoCheck(){
  	console.log("check");
  }

  onEnter(){
  	console.log('works!!');
  }

}
