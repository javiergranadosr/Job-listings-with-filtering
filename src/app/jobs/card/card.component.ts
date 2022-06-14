import {
  Component,
  DoCheck,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

import { Job } from '../models/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, DoCheck {
  public hasFilter: boolean = false;
  public jobs: Job[] = [];
  public jobsWithFilter: Job[] = [];
  public filters: Set<string> = new Set<string>();
  @Output() sendFilters = new EventEmitter<Set<string>>();

  constructor(private jobService: JobService) {}

  ngDoCheck(): void {
    let jobs: Job[] = this.dataJobs;
    this.jobsWithFilter = [];

    if (this.filters.size === 0) {
      this.hasFilter = false;
      this.jobsWithFilter = [];
    }

    for (let filter of this.filters) {
      jobs.map((job, index) => {
        job.languages.map((language) => {
          if (filter.toUpperCase() === language.toUpperCase()) {
            this.jobsWithFilter.push(job);
          }
        });
        job.tools.map((tool) => {
          if (filter.toUpperCase() === tool.toUpperCase()) {
            this.jobsWithFilter.push(job);
          }
        });
      });
    }
  }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((results) => {
      this.jobs = results;
    });
  }

  getFilters(filters: string[]) {
    this.hasFilter = true;
    if (this.filters.size > 3) return;
    filters.map((filter) => {
      this.filters.add(filter);
    });
    this.getJobByFilter();
    this.sendFilters.emit(this.filters);
  }

  getJobByFilter() {
    this.jobsWithFilter = [];
    this.jobs.map((job) => {
      let languages: string[] = [];
      let tools: string[] = [];

      job.languages.map((data) => {
        languages.push(data.toUpperCase());
      });

      job.tools.map((data) => {
        tools.push(data.toUpperCase());
      });

      job.languages = languages;
      job.tools = tools;

      for (let filter of this.filters) {
        if (job.languages.includes(filter) || job.tools.includes(filter)) {
          this.jobsWithFilter.push(job);
        }
      }
    });
  }

  get dataJobs(): Job[] {
    return this.hasFilter ? [...new Set(this.jobsWithFilter)] : this.jobs;
  }
}
