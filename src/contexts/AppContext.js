import React, {createContext, useContext} from 'react';

import firebase from '../services/firebase';

const AppContext = createContext();

const AppProvider = ({children}) => {
  // cria um usuário
  const createUser = (name, office) => {
    let uid = firebase.auth().currentUser.uid;
    let key = firebase
      .database()
      .ref('users')
      .child(uid)
      .push().key;

    if (name === '' || office === '') {
      alert('Preencha todos os Dados');
      return;
    }
    firebase
      .database()
      .ref('users')
      .child(uid)
      .child(key)
      .set({name, office});
  };

  return (
    <AppContext.Provider value={{createUser}}>{children}</AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  const {createUser} = context;
  return {createUser};
};

export default AppProvider;
