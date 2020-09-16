import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {


  constructor(private _snackBar: MatSnackBar, @Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

  ngOnInit() {
  }

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(this.data.message, action, {
  //     duration: 1000,
  //     panelClass: this.data.type,
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition
  //   });
  // }


}
