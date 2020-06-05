import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  user = null;

  ngOnInit() {

    this.dataService.sendGetRequest('user').subscribe((user: any)=>{
      console.log('user...',user);
      this.user = user;
    })  
  }

}

