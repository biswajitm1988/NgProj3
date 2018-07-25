import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostGridComponent } from './service/post-grid/post-grid.component';
import { PostDetailsComponent } from './service/post-details/post-details.component';
import { PostFormComponent } from './service/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostGridComponent,
    PostDetailsComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
