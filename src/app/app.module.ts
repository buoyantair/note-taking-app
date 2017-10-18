import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } 
from './modules/custom-material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NewNoteComponent } from './components/new-note/new-note.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule
    ],
  declarations: [ AppComponent, NoteComponent, NoteListComponent, NewNoteComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
