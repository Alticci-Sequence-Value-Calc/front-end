import { Component } from '@angular/core';
import { RESULTS } from '../mock-result-list';
import { CalculusService } from '../calculus.service';
import { Result } from '../result';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent {
  results: Result[] = [];
  constructor(private calculusService: CalculusService) {
    this.calculusService
      .getResults()
      .subscribe((results) => (this.results = results));
  }

  clear() {
    this.calculusService.clear();
  }
}
