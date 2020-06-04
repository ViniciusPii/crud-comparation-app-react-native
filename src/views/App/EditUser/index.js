import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useApp} from '../../../contexts/AppContext';

import {Layout, Input, Container, Button, Clear} from '../../../components';

const EditUser = ({route}) => {
  const navigation = useNavigation();

  const {editUser} = useApp();

  const {key, uid, userName, userOffice} = route.params;

  const [name, setName] = useState(userName);
  const [office, setOffice] = useState(userOffice);

  const handleEdit = () => {
    editUser(name, office, uid, key);
    navigation.navigate('Home');
  };

  return (
    <Layout footerColorIOS="white">
      <Container>
        <Clear>
          <Input
            type="outline"
            label="Nome"
            value={name}
            onChangeText={t => setName(t)}
          />
          <Input
            type="outline"
            label="Cargo"
            value={office}
            onChangeText={t => setOffice(t)}
          />
          <Button text="Editar" onPress={handleEdit} />
        </Clear>
      </Container>
    </Layout>
  );
};

export default EditUser;
