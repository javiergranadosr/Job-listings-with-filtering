import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories:string[] = [];
  public filters:string[] = [];
  @Input() languajes: string[] = [];
  @Input() tools:string[] = [];
  @Output() eventFilters = new EventEmitter<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.categories = this.languajes.concat(this.tools);
  }

  addFilter(filter:string) {
    const value = filter.toUpperCase();
    this.filters = [];
    this.filters.push(value);
    this.eventFilters.emit(this.filters);
  }
}
