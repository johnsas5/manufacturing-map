import { Auth } from '@firebase/auth';

export function Log(s: string) {
  console.log(s);
}

export function logAuthData(a: Auth) {
  console.log(`Current User ID: ${a.currentUser?.uid}`);
  console.log(`isAnon: ${a.currentUser?.isAnonymous}`);
  console.log(`Phone: ${a.currentUser?.phoneNumber}`);
  console.log(`Provider ID: ${a.currentUser?.providerId}`);
  console.log(`Provider Data: ${a.currentUser?.providerData.forEach((d) => console.log(d))}`);
  console.log(`Email: ${a.currentUser?.email}`);
  console.log(`App name: ${a.name}`);
  console.log(`TenantID: ${a.tenantId}`);
}