import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from './../services/article.service';


import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-info-desk-form',
  templateUrl: './info-desk-form.component.html',
  styleUrls: ['./info-desk-form.component.css']
})
export class InfoDeskFormComponent implements OnInit {



  public newsandevents: any[];
  public newsCategories: any[];
  public locations: any[];
  

public article = {
    id: 0,
    newsEventId: 0,
    newsCategoryId: 0,
    isInvited: false,
    locations: [],
  
    bunk: {
      title: '',
      subTitle: '',
      body: '',
      dateOfEvent: '',
      duration: '',
    }
  }; 

  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private toastrService: ToastrService,
  ) {
   // this.date = new Date();
    route.params.subscribe(p => {
     // this.article.id = +p['id'] || 0;
    });
  }



 





  ngOnInit(): void {

  /*  this.articleService.getArticle(this.article.id)
      .subscribe(a => {
        this.article = a;
      }, err => {
        if (err.status == 404)
          this.router.navigate(['/not-found-error'])
        });

    */

    this.articleService.getNewsEvents().subscribe(newsandevents => 
      this.newsandevents = newsandevents);

  // console.log("NEWSANDEVENTS", this.newsandevents);



    this.articleService.getLocations().subscribe(locations => 
      this.locations = locations);

    //  console.log("LOCATIONS", this.locations);

  }

    
  
  

onNewsEventChange ()  {
    
    console.log("Articles", this.article)
   let selectedNewsandEvent = this.newsandevents.find(n => n.id == this.article.newsEventId);

   this.newsCategories = selectedNewsandEvent.newsCategories;
  }


  onLocationToggle(locationId, $event) {
    if ($event.target.checked)
      this.article.locations.push(locationId);
    else {
      var index = this.article.locations.indexOf(locationId);
      this.article.locations.splice(index, 1);
    }

  }  

  submitArticle() {
    this.articleService.create(this.article)
      .subscribe(x => {
        this.toastrService.success('Thank you', 'Event updated succesfuly');
      });
  } 
 


}
