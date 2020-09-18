import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'feed-item',
  styleUrls: ["./feed-item.component.scss"],
  templateUrl: './feed-item.component.html',
})
export class FeedItemComponent implements OnInit {
  @Input() name: string;
  @Input() username: string;
  @Input() time: string;
  constructor(){

  }
  ngOnInit(){
    
  }
}
