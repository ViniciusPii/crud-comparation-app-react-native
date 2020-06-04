import React, {useContext, createContext, useState, useEffect} from 'react';

import firebase from '../services/firebase';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setSigned(!!user);
    });
  });

  return (
    <AuthContext.Provider value={{loading, setLoading, signed, setSigned}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  const {signed, setSigned} = context;
  return {signed, setSigned};
};

export default AuthProvider;
