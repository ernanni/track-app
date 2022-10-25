import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
import { AuthForm, NavLink } from '../components';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        buttonText="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Click Here"
      />
    </View>
  );
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
