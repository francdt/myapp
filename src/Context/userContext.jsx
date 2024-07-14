import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseconfig'; 

export const UserContext = createContext();
// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        }, err => console.log("Error al unsuscribe: ", err));
        
        return unsubscribe;
      }, []);
    
    return (
        <UserContext.Provider value={{ user, setUser}}>
            {!loading && children}
        </UserContext.Provider>
    )
}