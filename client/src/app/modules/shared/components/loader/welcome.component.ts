import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-welcome',
  styles: [`
  `],
  template: `
    <div style="width:200px;position:absolute;top:50%;left:50%;margin-top:-200px;margin-left:-100px;">
      <div class="form-row">

        <label>Username</label>
        <input class="form-control" type="text"/>

        <label>Password</label>
        <input class="form-control" type="password"/>

        <a style="margin-top:1em;" class="btn btn-primary form-control" href="javascript:;" (click)="signIn()">Sign In</a>

      </div>
    </div>
  `
})

export class WelcomeComponent implements OnInit {
  constructor() {
  }

  signIn() {

  }

  ngOnInit() {
  }


}
