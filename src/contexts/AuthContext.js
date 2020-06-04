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

  // cria usuário
  const createAccount = (name, email, password) => {
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        //separação do id e criação da chave para o item
        const {uid} = res.user;

        //criando o nó admin
        firebase
          .database()
          .ref('admin')
          .child(uid)
          .set({
            name,
            email,
          });

        alert('Cadastrado com sucesso!');
        setLoading(false);
      })
      .catch(erro => {
        if (name === '' || email === '' || password === '') {
          alert('Preencha todos os campos!');
          setLoading(false);
          return;
        }

        switch (erro.message) {
          case 'Password should be at least 6 characters':
            alert('Sua senha deve ter no minimo 6 caracteres!');
            break;
          case 'The email address is already in use by another account.':
            alert('Esse email já está sendo utilizado por outro usuário!');
            break;
          case 'The email address is badly formatted.':
            alert('O formato do email não é válido!');
            break;
          default:
            alert('Não foi possível cadastrar o Usuário');
            break;
        }
        setLoading(false);
      });
  };

  // desloga um usuário
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        signed,
        setSigned,
        login,
        createAccount,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  const {signed, loading, login, createAccount, logout} = context;
  return {signed, loading, login, createAccount, logout};
};

export default AuthProvider;
