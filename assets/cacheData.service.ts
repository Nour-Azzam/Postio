import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { MyComment } from './myComment.model';
import { Post } from './post.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class CacheDataService {
  constructor(private httpClient: HttpClient) {}
  posts$ = this.httpClient
    .get<any>('https://dummyjson.com/posts')
    .pipe(map((response) => response.posts as Post[]));

  users$ = this.httpClient
    .get<any>('https://dummyjson.com/users')
    .pipe(map((response) => response.users as User[]));

  comments$ = this.httpClient
    .get<any>('https://dummyjson.com/users')
    .pipe(map((response) => response.comments as MyComment[]));

  usersCahce: Record<number, Observable<User>> = {};
  commentsChache: Record<number, Observable<MyComment[]>> = {};

  getUserById(id: number) {
    if (this.usersCahce[id]) {
      return this.usersCahce[id];
    }
    return (this.usersCahce[id] = this.httpClient.get<User>(
      'https://dummyjson.com/users/' + id
    )).pipe(shareReplay(1));
  }

  getPosts(counter: number) {
    return this.httpClient
      .get<any>('https://dummyjson.com/posts?skip=' + counter + '&limit=4')
      .pipe(map((response) => response.posts as Post[]));
  }

    searchUser(queryParam: string){
      return this.httpClient
      .get<any>('https://dummyjson.com/users/search?q=' + queryParam)
      .pipe(map((response) => response.users as User[]));
    }

}
