import { Component, Input, OnInit } from '@angular/core';
import { Observable, shareReplay, map } from 'rxjs';
import { User } from '../../../assets/user.model';
import { MyComment } from '../../../assets/myComment.model';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/assets/post.model';
import { CacheDataService } from 'src/assets/cacheData.service';

// import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  showingComments = false;
  // loading$ = this.loader.loading$;

  @Input() post?: Post;
  // myComment$ = {};

  constructor(
    private httpClient: HttpClient,
    private chacheService: CacheDataService,

  ) {}

  ngOnInit(): void {}

  showComments(postId: number) {
    if (this.chacheService.commentsChache[postId]) {
      // this.extractUser(this.chacheService.commentsChache[postId]);
      return this.chacheService.commentsChache[postId];
    }
    return (this.chacheService.commentsChache[postId] = this.httpClient
      .get<any>('https://dummyjson.com/posts/' + postId + '/comments')
      .pipe(
        map((response) => response.comments as MyComment[]),
        shareReplay(2)
      ));
  }

  // extractUser(comments$: Observable<MyComment[]>) {

  //   const usersIds$ = comments$.pipe(
  //     map(commentsList => commentsList.map(comment => comment.user.id))
  //   );
  //   usersIds$.subscribe(userIds => {
  //     userIds.forEach(userId => this.getUserById(userId));
  //   })
  // }
  getUserById(id: number) {
    return this.chacheService.getUserById(id);
  }

}
