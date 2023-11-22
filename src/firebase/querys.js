import md5 from 'md5';
import jwt from 'jsonwebtoken';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from './connection';

const db = getFirestore(firebaseConfig);
const secretKey = 'seu_segredo_super_secreto';

export const getUser = async (email, password) => {
  try {
    const getData = query(collection(db, "users"), where("email", "==", email), where("password", "==", password));

    const querySnapshot = await getDocs(getData);

    if (querySnapshot._docs && querySnapshot._docs.length > 0) {
      return { 
        email: querySnapshot._docs[0]._document.data.value.mapValue.fields.email.stringValue,
        firstName: querySnapshot._docs[0]._document.data.value.mapValue.fields.firstName.stringValue,
        lastName: querySnapshot._docs[0]._document.data.value.mapValue.fields.lastName.stringValue,
        role: querySnapshot._docs[0]._document.data.value.mapValue.fields.role.stringValue,
      }
    }
    return null;
  } catch(error) {
    return error;
  }
}

export const login = async (email, password) => {
  const encryptedPass = md5(password);
  const response = await getUser(email, encryptedPass);
  
  if (!response) return null;

  const token = jwt.sign({
    email: response.email,
    firstName: response.firstName,
    lastName: response.lastName,
    role: response.role,
  }, secretKey, { expiresIn: '4h' });

  localStorage.setItem('jwtToken', token);

  return {
    firstName: response.firstName,
    lastName: response.lastName,
    email: response.email,
    role: response.role,
  };
}

export const registerUser = async (email, firstName, lastName, password) => {
  await addDoc(collection(db, "users"), {
    email,
    firstName,
    lastName,
    password: md5(password),
    role: 'normal',
  });
};

export const verifyEmail = async (email) => {
  try {
    const getData = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(getData);
    return querySnapshot._docs && querySnapshot._docs.length > 0;
  } catch(error) {
    return error;
  }
}
