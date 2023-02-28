import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { CacheDataService } from 'src/assets/cacheData.service';
import { User } from 'src/assets/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {


  constructor(private activeRoute: ActivatedRoute,
    private cacheService: CacheDataService) {
   }

   user = this.activeRoute.paramMap.pipe(
    map(params => params.get('id')),
    filter((id): id is string => !!id),
    switchMap(id => this.cacheService.getUserById(+id))
   );

  ngOnInit(): void {
  }

}
