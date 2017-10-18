import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../classes/note';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @Input() deleteNote: Function;
  @Input() editNote: Function;
  @Input() notesList: Note[];
  constructor() { }

  ngOnInit() {
  }

}