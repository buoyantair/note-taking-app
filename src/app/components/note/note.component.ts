import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../classes/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() deleteNote: Function;
  @Input() editNote: Function;
  @Input() thisNote: Note;

  editing: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  toggleEdit(note){
    if(note){
      this.editNote(this.thisNote);
    }
    this.editing = !this.editing;
  }
}