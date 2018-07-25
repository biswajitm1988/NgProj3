import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostGridComponent } from './post-grid/post-grid.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostService } from './service/post.service';

const pathMappings : Routes = [
  {path:'', component: PostGridComponent },
  { path: 'addPost', component: PostFormComponent },
  { path: 'editPost/:id', component: PostFormComponent },
  { path: 'viewPost/:id', component: PostDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostGridComponent,
    PostDetailsComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(pathMappings)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
