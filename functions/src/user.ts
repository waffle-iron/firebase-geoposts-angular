import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

export class User {

  // Creates the user data in the Realtime Datastore when an account is created.
  public authNewUser = functions.auth.user().onCreate( this.updateUserData );

  // Deletes the user data in the Realtime Datastore when an account is deleted.
  public authDeleteUser = functions.auth.user().onDelete( this.deleteUserData );

  private updateUserData( event ) {
    const user: functions.auth.UserRecord = event.data;

    const userDataObj = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      metadata: user.metadata,
      photoURL: user.photoURL,
      providerId: user.providerData[0].providerId,
      providerUId: user.providerData[0].uid
    };

    return admin.database().ref( 'users/' + user.uid ).update( userDataObj );
  }

  private deleteUserData( event ) {
    const user: functions.auth.UserRecord = event.data;
    return admin.database().ref( `/users/${user.uid}` ).remove();
  };

}
