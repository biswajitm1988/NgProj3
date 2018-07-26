import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  isNew:boolean;
  post:Post;
  errMsg:string;

  constructor(private postService:PostService, 
    private routeState:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.routeState.params.subscribe(params => {
      if(params["id"]==null){
        this.isNew=true;
        this.post=new Post();
      }else{
        let id=params["id"];
        this.postService.getPost(id).subscribe(
          data => {this.post=data;this.errMsg=null;},
          error => {this.errMsg="Failed to invoke service";console.log(error)}
        )
      }
    });
  }
  savePost(){
    this.postService.savePost(this.post).subscribe(
      data => {this.post=data;this.errMsg=null;},
      error => {this.errMsg="Failed to invoke service";console.log(error)}
    )
  }

}
