import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/core/auth.service';
import * as firebase from 'firebase/app';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit {
  title = 'app works!';
  user: firebase.User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.user$.subscribe(
      ( res ) => {
        this.user = res;
        if ( res ) {
          this.router.navigate( [''] );
        }
      }
    );
  }
  logout(): firebase.Promise<any> {
    return this.authService.logout()
      .then(( data ) => { console.log( 'logged out' ); } )
      .catch(( err ) => { console.log( err ); } );
  }
}
