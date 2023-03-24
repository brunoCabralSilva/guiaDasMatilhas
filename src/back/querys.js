import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  addDoc,
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