import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  styleUrls: ["./navigation.component.scss"],
  templateUrl: './navigation.component.html',
})

export class NavigationComponent implements OnInit {
  currentRoute: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
    //get initial route
    setTimeout(() => {
      this.currentRoute = this.router.url;
    }, 1000);
  }

  navigate(route){
    this.currentRoute = route;
  }
}
