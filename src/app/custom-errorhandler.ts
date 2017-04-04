import { NgModule, ErrorHandler, Inject, NgZone } from '@angular/core';
import { NotificationService } from './notification.service';

export class CustomErrorHandler implements ErrorHandler {

  constructor(
    @Inject(NotificationService) private notificationService: NotificationService,
    @Inject(NgZone) private zone: NgZone
  ) {
  }

  handleError(error) {
    this.showErrorInConsole(error);
    this.zone.run(() => {
      if (error.status === 0) {
        this.notificationService.notifyError('Connection to api was lost');
      }
      else {
        this.notificationService.notifyError(error);
      }
    });
  }

  showErrorInConsole(error: any): void {
    if (console && console.group && console.error) {
      console.group("Error Log");
      console.error(error);
      if (error.message) {
        console.error(error.message);
      }
      if (error.stack) {
        console.error(error.stack);
      }
      console.groupEnd();
    }
  }
}
