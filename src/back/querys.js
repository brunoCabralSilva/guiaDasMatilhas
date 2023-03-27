import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  addDoc,
  setDoc,
} from 'firebase/firestore/lite';
import md5 from 'md5';
import { Link } from 'react-router-dom';
import firebaseConfig from '../back/connection';

const db = getFirestore(firebaseConfig);

export const getCollection = async (type) => {
  const userCollectionRef = collection(db, type);
  const getData = await getDocs(userCollectionRef);
  const data = getData._docs.map((item) => {
    return {
      ...item._document.data.value.mapValue.fields,
      id: item._key.path.segments[item._key.path.segments.length -1],
  }});
  return data;
}

const nameCollection = (type) => {
  switch(type) {
    case "racas":
      return "breeds";
    case "tribos":
      return "trybes"
    default:
     return "auspices";
  }
}

export const getById = async (type, id) => {
  const docRef = doc(db, nameCollection(type), id);
  const docSnap = await getDoc(docRef);
  console.log(docSnap._document.data.value.mapValue.fields);
  return docSnap._document.data.value.mapValue.fields;
}

export const getGiftByName = async (name) => {
  const docRef = query(collection(db, "gifts"), where("nameOriginal", "==", name));
  const querySnapshot = await getDocs(docRef);
  return querySnapshot;
}

export const insertGift = async (gift) => {
  await addDoc(collection(db, "gifts"), {
    nameOriginal: gift.nameOriginal,
    namePtBr: gift.namePtBr,
    note: gift.note,
    rank: gift.rank,
    systemOriginal: gift.systemOriginal,
    systemPtBr: gift.systemPtBr,
    belong: gift.listOfBelongs,
    font: gift.listOfFonts,
    textOriginal: gift.textOriginal,
    textPtBr: gift.textPtBr,
    prerequisite: gift.prerequisite,
  });
};

export const findByEmail = async (email) => {
  const validateEmail = /\S+@\S+\.\S+/;
  const vEmail = !email || !validateEmail.test(email) || email === '';

  if (vEmail) return "Necessário informar um e-mail válido";

  const docRef = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(docRef);

  if (querySnapshot._docs.length === 0) {
    return <span>E-mail não cadastrado. Registre-se <Link className="register-forgot" to="/register">aqui</Link>!</span>
  }
  
  if (querySnapshot._docs[0]._document.data.value.mapValue.fields.role.stringValue === "administrator") {
    return "A alteração de senha não está habilitada para este usuário"
  }

  // const id = querySnapshot._docs[0]._key.path.segments[querySnapshot._docs[0]._key.path.segments.length -1];

  // const newPassword = Math.random().toString(36);

  // await setDoc(doc(db, 'users', id), {
  //   email: querySnapshot._docs[0]._document.data.value.mapValue.fields.email.stringValue,
  //   firstName: querySnapshot._docs[0]._document.data.value.mapValue.fields.firstName.stringValue,
  //   lastName: querySnapshot._docs[0]._document.data.value.mapValue.fields.lastName.stringValue,
  //   role: querySnapshot._docs[0]._document.data.value.mapValue.fields.role.stringValue,
  //   password: md5(newPassword),
  // });
  
}
