import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor( private afAuth: AngularFireAuth ) {
    this.user$ = afAuth.authState.do(
      ( res ) => {
        if ( res ) {
          console.log( res.displayName + ' is logged' );
        } else {
          console.log( 'No user logged' );
        }
      },
      ( err ) => { console.log( err ); },
      () => { console.log( 'this.authService.user completed' ); }
    );
  }
  logout(): firebase.Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
