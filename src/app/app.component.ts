import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isEqual } from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apiCache';
  message$ = new BehaviorSubject('a messsage')
  fetch1data$ = new BehaviorSubject<any>({some: 'data'})
  fetch2data$ = new BehaviorSubject<any>({some: 'data'})

  constructor(private http: HttpClient) {}

  fetch1() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      tap(r => this.fetch1data$.next(r))
    ).subscribe()
    // console.log(isEqual)
  }

  fetch2() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/2').pipe(
      tap(r => this.fetch2data$.next(r))
    ).subscribe()
  }
}
