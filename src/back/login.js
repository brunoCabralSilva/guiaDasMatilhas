import md5 from 'md5';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from '../back/connection';

const db = getFirestore(firebaseConfig);

export const getUser = async (email, password) => {
  const getData = query(collection(db, "users"), where("email", "==", email), where("password", "==", password));

  const querySnapshot = await getDocs(getData);

  if (querySnapshot._docs && querySnapshot._docs.length > 0) {
    return { 
      email: querySnapshot._docs[0]._document.data.value.mapValue.fields.email.stringValue,
      name: querySnapshot._docs[0]._document.data.value.mapValue.fields.name.stringValue,
      role: querySnapshot._docs[0]._document.data.value.mapValue.fields.role.stringValue,
    }
  }
  return null;
}

export const login = async (email, password) => {
  const encryptedPass = md5(password);
  const response = await getUser(email, encryptedPass);
  
  if (!response) return null;
  
  return {
    name: response.name,
    email: response.email,
    role: response.role,
    token: Math.random().toString(36),
  };
}

export const verifyEmail = async (email) => {
  const getData = query(collection(db, "users"), where("email", "==", email));
  
  const querySnapshot = await getDocs(getData);

  if (querySnapshot._docs && querySnapshot._docs.length > 0) {
    return true
  }
  return false;
}