import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.css']
})
export class PostcreateComponent implements OnInit {
  newPost = '';
  onAddPost(){
    this.newPost = 'The user is me';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
