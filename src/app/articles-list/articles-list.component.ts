import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Article } from './article.model'
import { ArticlesService } from './articles.service'

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html'
})
export class ArticlesListComponent implements OnInit {
  articles: Article[];
  routeRef: any;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService) {
  }

   ngOnInit() {
    this.routeRef = this.route.params.subscribe(params => {
      this.articlesService.get(params['id'])
          .subscribe(articles => this.articles = articles);
    });
   }

  onRowSelect(rowInfo) {
    console.log(JSON.stringify(rowInfo.data)); // or this.selectedRow
  }

  ngOnDestroy() {
    this.routeRef.unsubscribe();
  }
}