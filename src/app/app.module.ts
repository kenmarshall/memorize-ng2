import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ScriptureComponent } from './scripture/scripture.component';
import { ScriptureSearchComponent } from './scripture/scripture-search/scripture-search.component';
import { ScriptureViewBoxComponent } from './scripture/scripture-view-box/scripture-view-box.component';
import { SanitizeHtmlPipe } from './scripture/scripture-view-box/sanitize-html.pipe';
import { UnderscoredPipe } from './scripture/scripture-view-box/underscored.pipe';
import { WordInputComponent } from './scripture/scripture-view-box/word-input/word-input.component';

import { AlertModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    ScriptureSearchComponent,
    ScriptureViewBoxComponent,
    ScriptureComponent,
    ScriptureSearchComponent,
    ScriptureViewBoxComponent,
    SanitizeHtmlPipe,
    UnderscoredPipe,
    WordInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [AlertModule.forRoot(), ModalModule.forRoot()],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
