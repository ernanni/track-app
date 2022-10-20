import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const AccountScreen = ({ navigation }) => {
  return <>
    <Text style={{ fontSize: 48 }}>AccountScreen</Text>
    <Button title="Go to login flow" onPress={() => navigation.navigate('loginFlow')} />
  </>
}

const styles = StyleSheet.create({});

export default AccountScreen;
