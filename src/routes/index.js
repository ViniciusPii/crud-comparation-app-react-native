import React, {useState, useEffect} from 'react';

import firebase from '../services/firebase';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setSigned(!!user);
    });
  }, []);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
