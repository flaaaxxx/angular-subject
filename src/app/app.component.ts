import {Component, OnInit} from '@angular/core';
import {interval, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-subject';

  subject = new Subject<number>();

  ngOnInit(): void {

    ////////////////
    // create stream
    const observable = interval(1000);

    observable.subscribe(x => this.subject.next(x));

    this.subject.subscribe(x => console.log('Subscribe 1: ' + x));

    setTimeout(() => this.subject.subscribe(x => console.log('Subscribe 2: ' + x)), 4000);

  }

}
