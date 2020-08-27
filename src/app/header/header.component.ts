import { Component, OnInit, OnDestroy } from '@angular/core';
import { InAppMessageService } from '../in-app-message.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
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
      err => {}
    );
   }

  ngOnInit() {
  }
  /* */
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
