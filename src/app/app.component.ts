import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})



export class AppComponent implements OnInit  {
ngOnInit(): void {
  const Observer = {
    next: apple => console.log(`emitted ${apple}`),
    error: err => console.log(`error occured ${err}`),
    complete: () =>console.log('completed')
        
    };
    const apple$ = new Observable(appSubscriber =>
      {
        appSubscriber.next('Apple1')
        appSubscriber.next('Apple2')
        appSubscriber.complete();
      });
  let sub = apple$.subscribe(Observer);
}
  name = 'Angular ' + VERSION.major;

  
}
