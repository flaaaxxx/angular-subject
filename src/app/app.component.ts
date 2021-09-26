import {Component, OnInit} from '@angular/core';
import {interval, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-subject';

  ngOnInit(): void {

    ////////////////
    // create stream
    const observable = interval(1000);

    observable.subscribe(x => console.log('Subscriber 1: ' + x));

    setTimeout(() => observable.subscribe(x => console.log('Subscriber 2: ' + x)), 4000);

  }

}
