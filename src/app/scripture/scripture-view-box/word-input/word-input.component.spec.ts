/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordInputComponent } from './word-input.component';

describe('WordInputComponent', () => {
  let component: WordInputComponent;
  let fixture: ComponentFixture<WordInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
