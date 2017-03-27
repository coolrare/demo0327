import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web (保哥的部落格)';

  getTitle() {
    return this.title;
  }

  constructor() { }

  ngOnInit() {
  }

}
