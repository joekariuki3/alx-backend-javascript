import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Use Promise.all to collectively resolve all promises
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      // Log body (firstName and lastName) to the console
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // Log error message in case of an error
      console.log('Signup system offline');
    });
}
