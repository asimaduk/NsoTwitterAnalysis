import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  navLinks = [{label: 'Query',path:'/query'},{label: 'Groups',path:'/groups'},{label: 'Feeds',path:'/feeds'},{label: 'Rules & Alerts',path:'/rules-and-alerts'},{label: 'Users',path:'/users'}];
  activeLink = this.navLinks[0].path;
}
