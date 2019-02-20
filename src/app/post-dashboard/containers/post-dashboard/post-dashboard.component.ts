import { Component, OnInit,OnDestroy } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { startWith ,switchMap } from 'rxjs/operators';
import { ISubscription } from "rxjs/Subscription";

import { Post } from '../../models/post.model'
import { PostService } from '../../services/post.service'


@Component({
  selector: 'post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss'],
})
export class PostDashboardComponent implements OnInit,OnDestroy  {

  private subscription: ISubscription;
  lstPost:Post[] = [];
  searchText = '';
  
  
  constructor(private postService :PostService) { }

  ngOnInit() {

    this.subscription = interval(10000)
         .pipe(
                startWith(0),
                switchMap(() => this.postService.getPosts())
              ).subscribe(post=> 
                      this.lstPost=post
              );
  }

  ngOnDestroy() { 
        if(this.subscription){
          this.subscription.unsubscribe();
        }
   }
}

