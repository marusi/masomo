
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
// import 'rxjs/observable/ForkJoinObservable';
import { ToastrService } from 'ngx-toastr';
import { KeyValuePair, Article } from '../models/article';

@Component({
  selector: 'app-article-list',
  styleUrls: ['article-list.component.css'],
  templateUrl: 'article-list.component.html'
})
export class ArticleListComponent implements OnInit {
  private readonly PAGE_SIZE = 6;

  queryResult: any = { };

  newsEvents: KeyValuePair[];
  locations: KeyValuePair[];
  query: any = {
    pageSize: this.PAGE_SIZE
  };
  columns = [
    {title: 'Id' },
    {title: 'Title', key: 'bunkTitle', isSortable: true },
    {title: 'Category', key: 'categoryItem', isSortable: true },


  ];


  constructor(private articleService: ArticleService, private toastrService: ToastrService) { }

  ngOnInit() {

    this.articleService.getNewsEvents()
      .subscribe(newsEvents => this.newsEvents = newsEvents);

    this.articleService.getLocations()
      .subscribe(locations => this.locations = locations);

    this.populateArticles();

  }

  populateArticles() {

    this.articleService.getAllArticles(this.query).subscribe(result => {
      this.queryResult = result;

      console.log(this.queryResult);
    }, error => console.log(error));

  }

  onFilterChange() {
    this.query.page = 1;
    this.populateArticles();

  }

  resetFilter() {
    this.query = {
      page: 1,
      pageSize: this.PAGE_SIZE
    };
    this.onFilterChange();

  }

  sortBy(columnName) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.populateArticles();
  }

  onPageChange(page) {
    this.query.page = page;
    this.populateArticles();

  }
}
