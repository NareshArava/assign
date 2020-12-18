import { Injectable } from '@angular/core';
import { Note } from '../note';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class NoteService {

  constructor(private httpClient:HttpClient) { }


  getAllNotes():Observable<Array<Note>>{
    return this.httpClient.get<Array<Note>>('http://localhost:3000/notes');
  }
  addNote(note:Note):Observable<Note>{
    return this.httpClient.post<Note>('http://localhost:3000/notes',note);
  }
}
