import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../classes/note';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  @Input() addNote: Function;
  @Input() toggleDisplayAdd: Function;
  @Input() adding: boolean;
  newNote: Note = {
    title: 'Add your title here',
    text: 'Add your text here'
  };
  constructor() { }

  ngOnInit() {
  }

  resetNote(){
    
  }
}