import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ApiService } from './api.service';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  errors: string[] = [];

  constructor(
    private notificationService: NotificationService,
    private apiService: ApiService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    // Set up
    this.notificationService.errors().subscribe(error => this.toastr.error(error, 'Oops!'));

    setTimeout(() => {
      this.apiService.get('/someurl').subscribe(() => { /* do stuff with result */ });
    }, 500);
  }
}
