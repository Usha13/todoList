import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../app.reducers';
import * as AuthActions from '../auth/store/auth.actions';
import * as fromauth from '../auth/store/auth.reducers'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store : Store<fromApp.AppState>) { }

  authdata : Observable<fromauth.State>;

  ngOnInit(): void {
    this.authdata = this.store.select('auth');
  }

  logout(){
    this.store.dispatch(new AuthActions.LogOut());
  }

}
