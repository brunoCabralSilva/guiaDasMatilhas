import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from '../back/connection';

const db = getFirestore(firebaseConfig);

export const getTrybes = async () => {
  const userCollectionRef = collection(db, "trybes");
  const getData = await getDocs(userCollectionRef);
  const data = getData._docs.map((item) => {
    return item._document.data.value.mapValue.fields;
  });
  return data;
}

export const getBreeds  = async () => {
  const userCollectionRef = collection(db, "breeds");
  const getData = await getDocs(userCollectionRef);
  const data = getData._docs.map((item) => {
    return item._document.data.value.mapValue.fields;
  });
  return data;
}

export const getAuspices = async () => {
  const userCollectionRef = collection(db, "auspices");
  const getData = await getDocs(userCollectionRef);
  const data = getData._docs.map((item) => {
    return item._document.data.value.mapValue.fields;
  });
  return data;
}
