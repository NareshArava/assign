import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Note } from './note';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note:Note=new Note();
  notes : Array<Note> =[];
  constructor(private noteService:NoteService){

  }
  ngOnInit(){
    this.noteService.getAllNotes().subscribe(
      data=>{
        console.log(data)
        this.notes=data;
      },
      error=>{
        console.log(error)
      }
    
    )
  }
  takeNote(){
    console.log(this.note);
    this.noteService.addNote(this.note).subscribe(
      data=>{
        this.notes.push(data);
      },
      error=>{
        console.log(error)
      }
    )
    this.note=new Note();
  }
}
