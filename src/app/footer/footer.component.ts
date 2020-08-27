import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { InAppMessageService } from '../in-app-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  showlinks = false;
  subscription: Subscription;
  constructor(private msg: InAppMessageService, private router: Router) {
    this.subscription = this.msg.getisLoggedInShowHeader().subscribe(
      res => {
        debugger;
        if (res === null) {
          this.router.navigateByUrl('login');
        } else {
          this.showlinks = res;
        }
      },
      err => { }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
