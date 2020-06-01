import React from 'react';

import {Layout, Icon, Button} from '../../components';
import CreateLink from '../../components/CreateLink';

const Login = () => {
  return (
    <Layout bgColor="purple600">
      <Icon name="account-circle" fs={75} />
      <Button text="Login" onPress={() => {}} />
      <CreateLink />
    </Layout>
  );
};

export default Login;
