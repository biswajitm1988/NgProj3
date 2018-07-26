import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';
import { Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.css']
})
export class PostGridComponent implements OnInit {

  posts:Post[];
  errMsg:string;
  constructor(private postService:PostService,private router:Router) { }

  ngOnInit() {
    this.postService.listPost().subscribe(
      data => {this.posts=data;this.errMsg=null;},
      error => {this.errMsg="Failed to invoke service";console.log(error)}
    )
  }

  deletePost(post:Post){
    if(confirm("Are you sure you want to remove this Post")){
      this.postService.deletePost(post.id).subscribe();
      this.router.navigate(["/"]);
    }
  }

}
