import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap } from 'rxjs';
import { CacheDataService } from 'src/assets/cacheData.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList$ = this.cacheService.users$;
  @ViewChild('userSearch') userSearch?: ElementRef;

  constructor(
    private cdref: ChangeDetectorRef,
    private cacheService: CacheDataService,
    ) {}

  ngOnInit(): void {}

  onSearchUser() {
    this.usersList$ = this.cacheService.searchUser(
      this.userSearch?.nativeElement.value
    )
  }
}
