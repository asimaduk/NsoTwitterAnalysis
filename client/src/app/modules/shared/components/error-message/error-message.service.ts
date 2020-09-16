import {Injectable} from "@angular/core";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {ErrorMessageComponent} from "./error-message.component";

@Injectable({providedIn: 'root'})
export class ErrorMessageService {
  horizontalPosition: MatSnackBarHorizontalPosition = "start";
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) {
  }

  openSnackBar(config) {
    this._snackBar.openFromComponent(ErrorMessageComponent, {
      data: config,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: config.duration ? config.duration : 5000
    });
  }
}
