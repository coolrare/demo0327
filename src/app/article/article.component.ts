import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() item;

  constructor(public datasvc: DataService) { }

  ngOnInit() {
  }

  doDelete() {
    this.datasvc.deleteArticle(this.item);
  }
}
