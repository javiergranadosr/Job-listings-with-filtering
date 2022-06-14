import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() job!: Job;

  constructor() {}

  ngOnInit(): void {}
}
