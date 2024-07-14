import { db } from "./firebaseconfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore/lite";
const useCollectionRef = collection(db, "users");

const addUser = (user) => {
    return addDoc( useCollectionRef, {...user});
}

const getUserByEmail = async ( email ) => {
    let userByEmailQuery = query(useCollectionRef, where('email', '==', email))
    const userSnapshot = await getDocs(userByEmailQuery);
    if (!userSnapshot.empty) {
        userSnapshot.forEach((doc) => {
          console.log('User document:', doc.id, ' => ', doc.data());
        });
        return userSnapshot.docs[0].data();
    } else {
        console.log('No matching documents.');
        return null;
    }
} 


export {
    addUser,
    getUserByEmail
}
