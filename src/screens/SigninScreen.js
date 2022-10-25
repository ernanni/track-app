import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
import { AuthForm, NavLink } from '../components';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for Tracker"
        buttonText="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Click Here"
      />
    </View>
  );
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: '35%',
  }
});

export default SigninScreen;
