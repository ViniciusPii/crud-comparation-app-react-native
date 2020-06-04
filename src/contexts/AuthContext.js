import React, {useContext, createContext, useState, useEffect} from 'react';

import firebase from '../services/firebase';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [signed, setSigned] = useState(false);

  // verifica usuário
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setSigned(!!user);
    });
  });
  //////////

  // loga usuário
  const login = (email, password) => {
    setLoading(true);

    if (email === '' || password === '') {
      alert('Preencha todos os campos!');
      setLoading(false);
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Logado com sucesso!');
        setLoading(false);
      })
      .catch(() => {
        alert('Ah não, usuário ou senha incorretos!');
        setLoading(false);
      });
  };
  ///////////

  return (
    <AuthContext.Provider
      value={{loading, setLoading, signed, setSigned, login}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  const {signed, loading, login} = context;
  return {signed, loading, login};
};

export default AuthProvider;
