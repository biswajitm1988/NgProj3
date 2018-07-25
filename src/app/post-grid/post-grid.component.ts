import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.css']
})
export class PostGridComponent implements OnInit {

  posts:Post[];
  errMsg:string;
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.listPost().subscribe(
      data => {this.posts=data;this.errMsg=null;console.log(data);},
      error => {this.errMsg="Failed to invoke service";console.log(error)}
    )
  }

}
