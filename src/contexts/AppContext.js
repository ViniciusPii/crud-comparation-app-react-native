import React, {createContext, useContext} from 'react';

import firebase from '../services/firebase';

const AppContext = createContext();

const AppProvider = ({children, route}) => {
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

  // edita um usuário
  const editUser = (name, office, uid, key) => {
    if (name === '' || office === '') {
      alert('Preencha todos os Campos');
    }

    firebase
      .database()
      .ref('users')
      .child(uid)
      .child(key)
      .set({
        name,
        office,
      });
  };

  // deleta um usuário
  const deleteUser = (uid, key) => {
    firebase
      .database()
      .ref('users')
      .child(uid)
      .child(key)
      .remove();
  };

  return (
    <AppContext.Provider value={{createUser, editUser, deleteUser}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  const {createUser, editUser, deleteUser} = context;
  return {createUser, editUser, deleteUser};
};

export default AppProvider;
