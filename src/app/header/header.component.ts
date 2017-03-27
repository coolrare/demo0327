import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title = 'The Will Will Web';

  @Output()
  logoclick = new EventEmitter();

  getTitle() {
    return this.title;
  }

  changeTitle($event: MouseEvent) {
    console.log($event);
    if($event.ctrlKey) {
      this.title = this.title.substr(0, this.title.length - 1);
    } else {
      this.title += '!';
    }

    this.logoclick.emit(this.title);
  }

  checkSubtitleMark() {
    return this.title.length % 2 == 0;
  }
  constructor() { }

  ngOnInit() {
  }

}
