import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName)
    .then((value) => ({
      status: 200,
      value,
    }));

  const photoPromise = uploadPhoto(fileName)
    .catch((error) => ({
      status: 500,
      value: error,
    }));
  return Promise.all([userPromise, photoPromise]);
}
