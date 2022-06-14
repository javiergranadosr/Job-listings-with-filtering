import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.css'],
})
export class CardFilterComponent implements OnInit {
  @Input() title: string = '';
  @Output() removeFilter: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  remove(title: string) {
    this.removeFilter.emit(title);
  }
}
