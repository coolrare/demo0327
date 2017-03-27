import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web';

  getTitle() {
    return this.title;
  }

  changeTitle() {
    this.title = this.title + '!';
  }

  constructor() { }

  ngOnInit() {
  }

}
