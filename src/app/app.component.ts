import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'appJobListings';
  public filters: Set<string> = new Set<string>();
  public titleRemove: string = "";


  getFilters(filters: Set<string>) {
    this.filters = filters;
  }

  getSendRemove( title: string ) {
    this.titleRemove = "";
    this.titleRemove = title;
  }

}
