import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { Observable } from '../../../node_modules/rxjs';
import { Post } from '../model/post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl:string
  constructor(private http:Http) { 
    this.baseUrl="https://jsonplaceholder.typicodecom/posts";
  }

  listPost(): Observable<Post[]>{
    return this.http.get(this.baseUrl).pipe(
      map(response => response.json())
    );
  }
}
