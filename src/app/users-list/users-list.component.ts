import { Component, OnInit } from '@angular/core';
import { CacheDataService } from 'src/assets/cacheData.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList$ = this.cacheService.users$;

  constructor(private cacheService: CacheDataService) { }

  ngOnInit(): void {
  }

}
