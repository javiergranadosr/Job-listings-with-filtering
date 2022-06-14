import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.css'],
})
export class HeaderBannerComponent implements OnInit {
  @Input() filters: Set<string> = new Set<string>();
  @Output() sendRemove: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getRemove(titleRemove: string) {
    this.filters.delete(titleRemove);
    this.sendRemove.emit(titleRemove);
  }

  clearFilter() {
    this.filters.clear();
  }
}
