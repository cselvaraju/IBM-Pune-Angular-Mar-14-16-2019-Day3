import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'http://jsonplaceholder.typicode.com';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${URL}/posts`, httpOptions);
  }

  createPost(post: Post) {
    return this.http.post(`${URL}/posts`, post, httpOptions);
  }
}
