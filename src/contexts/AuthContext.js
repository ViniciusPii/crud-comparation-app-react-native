import React, {useContext, createContext} from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  const {} = context;
  return {};
};

export default AuthProvider;
