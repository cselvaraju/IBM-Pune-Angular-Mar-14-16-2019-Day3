import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-postdemo',
  templateUrl: './postdemo.component.html',
  styleUrls: ['./postdemo.component.css']
})
export class PostdemoComponent implements OnInit {

  posts;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(
      data => this.posts = data
    );
  }

  createPost() {
    const post = {
      id: null,
      title: 'Dummy Title',
      body: 'Dummy post body for testing'
    };

    this.postService.createPost(post).subscribe(
      data => this.posts.unshift(data)
    );
  }

}
