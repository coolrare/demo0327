import { Component } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public datasvc: DataService) {

  }
  title = 'app works!';

  keyword = 'New Title';

  temp = '';
  doLogoClick($event) {
    this.temp = $event;
  }

}
