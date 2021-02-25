import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss'],
})
export class PageSignInComponent implements OnInit, OnDestroy {
  private users = [
    {
      name: 'tonton',
      login: 'user',
      pass: 'user1',
    },
    {
      name: 'cricri',
      login: 'user2',
      pass: 'user2',
    },
  ];
  public obs$: Observable<any>;
  private sub!: Subscription;

  constructor() {
    this.obs$ = new Observable((listXSubscribes) => {
      listXSubscribes.next(this.users);
    });
  }

  ngOnInit(): void {
    this.sub = this.obs$.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
