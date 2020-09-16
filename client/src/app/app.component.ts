import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div>
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