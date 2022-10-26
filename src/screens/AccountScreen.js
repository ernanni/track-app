import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { Context as AuthContext } from '../context/AuthContext';
import { Spacer } from '../components';

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen;
