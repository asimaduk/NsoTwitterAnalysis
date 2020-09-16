import { ErrorHandler, Injectable} from '@angular/core';
@Injectable()

export class GlobalErrorHandler implements ErrorHandler {
  constructor() { }
  handleError(error) {
    /* check if its the 'change after checked error. if so, ignore it. */
    if (error.message.includes("ExpressionChangedAfterItHasBeenCheckedError")) {
        return;
    } else {
        throw error;
    }
  }
}
