import md5 from 'md5';
import {addDoc, collection, getFirestore} from 'firebase/firestore/lite';
import firebaseConfig from './connection';

const db = getFirestore(firebaseConfig);

export const registerUser = async (email, firstName, lastName, password) => {
  await addDoc(collection(db, "users"), {
    email,
    firstName,
    lastName,
    password: md5(password),
    role: 'normal',
  });
};