import md5 from 'md5';
// import { generate } from './jwtConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from '../back/connection';

const db = getFirestore(firebaseConfig);

export const getUser = async (email, password) => {
  const userCollectionRef = collection(db, "users");
  const getData = await getDocs(userCollectionRef);
  const data = getData._docs.find((item) => {
    const e = item._document.data.value.mapValue.fields.email.stringValue === email;
    const p = item._document.data.value.mapValue.fields.password.stringValue === password;
    if (e && p) return item;
    return null;
  });
  return { 
    email: data._document.data.value.mapValue.fields.email.stringValue,
    name: data._document.data.value.mapValue.fields.name.stringValue,
    role: data._document.data.value.mapValue.fields.role.stringValue,
  }
}


export const login = async (email, password) => {
  console.log(password);
  const encryptedPass = md5(password);

  console.log('encrypted', encryptedPass);

  const response = await getUser(email, encryptedPass);

  if (!response) return null;
  
  return {
    name: response.name,
    email: response.email,
    role: response.role,
    token: Math.random().toString(36),
  };
}