import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
admin.initializeApp( functions.config().firebase );

import { User } from './user';

const user = new User();

module.exports = {
  authDeleteUser: user.authDeleteUser,
  authNewUser: user.authNewUser
};
