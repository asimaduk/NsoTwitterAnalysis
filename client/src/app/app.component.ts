import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-nav></app-nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
  `]
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}