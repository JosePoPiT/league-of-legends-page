import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lolApp';
  constructor(
    private router: Router,
    private viewPortScroller: ViewportScroller
  ){
    // Comentado temporalmente para evitar el refresco automático
    /*
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.viewPortScroller.scrollToPosition([0, 0]));
    */
  }
}
