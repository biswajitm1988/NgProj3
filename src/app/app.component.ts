import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  description:string;
  constructor(){
    this.description="Demonstrates Http service to call post resful web srvice";
    this.title = 'NgProj3 - Post CRUD';
  }
}
