import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import { Context as AuthContext } from '../context/AuthContext';
import { Spacer } from '../components';

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.screenContainer} forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 25,
  }
});

AccountScreen.navigationOptions = {
  title: 'My Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

export default AccountScreen;
