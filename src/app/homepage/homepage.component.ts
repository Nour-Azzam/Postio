import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, fromEvent, map, Observable, shareReplay } from 'rxjs';
import { CacheDataService } from 'src/assets/cacheData.service';
import { MyComment } from 'src/assets/myComment.model';
import { Post } from '../../assets/post.model';
import { User } from '../../assets/user.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  counter = 0;

  posts$ = this.cacheService.getPosts(this.counter);

  // usersCahce: Record<number, Observable<User>> = {};
  // commentsChache: Record<number, Observable<MyComment[]>> = {};

  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheDataService
  ) {}

  // bodyScrollend$ = fromEvent(document.body, 'scroll').pipe(
  //   filter(
  //     (evt) =>
  //       document.body.scrollTop + document.body.offsetHeight >=
  //       document.body.scrollHeight
  //   )
  // );

  ngOnInit(): void {
    // this.bodyScrollend$.subscribe(console.log);
  }

  showPrevPosts() {
    this.counter = this.counter - 4;
    this.posts$ = this.httpClient
      .get<any>('https://dummyjson.com/posts?skip=' + this.counter + '&limit=4')
      .pipe(map((response) => response.posts as Post[]));
  }

  showNextPosts() {
    debugger;
    this.counter = this.counter + 4;
    this.posts$ = this.httpClient
      .get<any>('https://dummyjson.com/posts?skip=' + this.counter + '&limit=4')
      .pipe(map((response) => response.posts as Post[]));
  }
}
