import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore/lite';
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