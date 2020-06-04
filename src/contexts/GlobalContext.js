import React, {useContext, useState} from 'react';

const GlobalContext = useContext();

const GlobalProvider = ({children}) => {
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.GlobalProvider value={{loading, setLoading}}>
      {children}
    </GlobalContext.GlobalProvider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  const {loading, setLoading} = context;

  return {loading, setLoading};
};

export default GlobalProvider;
