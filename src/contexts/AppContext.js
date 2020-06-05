import React, {createContext, useContext, useState} from 'react';

import firebase from '../services/firebase';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState();

  // cria um usuário
  const createUser = (name, office) => {
    let uid = firebase.auth().currentUser.uid;
    let key = firebase
      .database()
      .ref('users')
      .child(uid)
      .push().key;

    firebase
      .database()
      .ref('order')
      .child(uid)
      .once('value', snap => {
        setOrder(snap.val().order);
      });

    firebase
      .database()
      .ref('users')
      .child(uid)
      .child(key)
      .set({name, office, order});

    firebase
      .database()
      .ref('order')
      .child(uid)
      .set({
        order: order - 1,
      });
  };

  // edita um usuário
  const editUser = (name, office, key) => {
    let uid = firebase.auth().currentUser.uid;

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
  const deleteUser = key => {
    let uid = firebase.auth().currentUser.uid;

    firebase
      .database()
      .ref('users')
      .child(uid)
      .child(key)
      .remove();
  };

  // lista os usuários
  const listUsers = () => {
    let uid = firebase.auth().currentUser.uid;

    setLoading(true);
    firebase
      .database()
      .ref('users')
      .child(uid)
      .orderByChild('order')
      .on('value', snap => {
        setUsers([]);

        snap.forEach(item => {
          let NewUsers = {
            key: item.key,
            name: item.val().name,
            office: item.val().office,
            order: item.val().order,
          };

          setUsers(oldUsers => [...oldUsers, NewUsers]);
        });
        setLoading(false);
      });
  };

  return (
    <AppContext.Provider
      value={{loading, users, createUser, editUser, deleteUser, listUsers}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  const {loading, users, createUser, editUser, deleteUser, listUsers} = context;
  return {loading, users, createUser, editUser, deleteUser, listUsers};
};

export default AppProvider;
