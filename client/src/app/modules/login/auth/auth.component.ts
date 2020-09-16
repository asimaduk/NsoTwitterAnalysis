import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { NavService } from '../../navigation/navigation.service';
import { LoginService } from '../login.service';
import { AppCacheProvider } from '../../shared/providers/app-cache-provider';
import { Modes } from '../login/login.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public dialogRef: MatDialog,
    // private navService: NavService,
    private loginService: LoginService,
    private router: Router,
    private appCacheProvider: AppCacheProvider,
  ) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: any) => {
       let dataStr;
        try {
          dataStr = window.atob(params.q);
        } catch (error) {
          return;
        }
        const data = JSON.parse(dataStr);
        this.handleLogin(data);
      });
  }

  async handleLogin(res) {
    this.appCacheProvider.saveToken(res.access_token);
    this.appCacheProvider.setUserDetails(res.userInfo);
    window.close();
  }
}
