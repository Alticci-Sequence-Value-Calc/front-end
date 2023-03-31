import { Injectable } from '@angular/core';
import { Result } from './result';
import {
  BehaviorSubject,
  Observable,
  catchError,
  of,
  tap,
  throwError,
} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Message } from './message';

@Injectable({
  providedIn: 'root',
})
export class CalculusService {
  private apiUrl = 'http://localhost:8080/alticci/'; // URL to web api

  resultsBehaviorSubject = new BehaviorSubject<Result[]>([]);

  constructor(private http: HttpClient) {}

  getResults(): Observable<Result[]> {
    return this.resultsBehaviorSubject.asObservable();
  }

  doCalculation(n: number): void {
    const url = this.apiUrl + n;
    this.http.get<Result>(url).subscribe({
      next: (result) => {
        let resultsTemp: Result[] = [];
        this.getResults().subscribe((results) => (resultsTemp = results));
        resultsTemp.push(result);
        this.resultsBehaviorSubject.next(resultsTemp);
        console.log(JSON.stringify(resultsTemp));
      },
      error: this.handleError,
    });
  }

  clear() {
    this.resultsBehaviorSubject.next([]);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 412) {
      alert(error.error.message);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
