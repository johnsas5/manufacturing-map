import { Auth } from '@firebase/auth';

export function Log(s: string) {
  console.log(s);
}

export function logAuthData(a: Auth) {
  console.log(`Current User ID: ${a.currentUser?.uid}`);
  console.log(`isAnon: ${a.currentUser?.isAnonymous}`);
  console.log(`Phone: ${a.currentUser?.phoneNumber}`);
  console.log(`Email: ${a.currentUser?.email}`);
}