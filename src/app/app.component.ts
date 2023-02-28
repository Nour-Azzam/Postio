import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  title = 'platform';
  @Output() lightThemed = true;

  constructor() {}


  // changeTheme(e: any){
  //   console.log(e);
  //   this.themeService.changeTheme(e);
  // }
}
