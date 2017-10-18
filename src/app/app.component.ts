import { Component } from '@angular/core';
import { Note } from './classes/note';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  adding: boolean = false;

  notes: Note[] = [
    {
      title: 'Plant trees',
      text: 'Plant trees in the garden'
    },
    {
      title: 'Water the roses',
      text: 'The roses are dying!'
    },
    {
      title: 'Paint the old chair',
      text: 'Save the poor one from rotting!'
    },
    {
      title: 'Repair the bicycle',
      text: 'The rear wheel is a bit buggy, look into the handles, and greaze the wheels'
    }
  ];

  deleteNote(note){
    this.notes = this.notes.filter(thisNote => note !== thisNote)
  }

  editNote(note){
    this.deleteNote(note);
    this.notes.unshift(note);
  }

  addNote(note){
    this.notes.unshift(new Note(note.title, note.text));
    this.toggleDisplayAdd();
    note.title = 'Add your title here';
    note.text = 'Add your text here';
  }

  toggleDisplayAdd(){
    this.adding = !this.adding;
  }
}
