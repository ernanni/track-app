import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Spacer } from './index';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routeName)}
      style={styles.linkContainer}
    >
      <Spacer>
        <Text style={styles.linkText}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    alignSelf: 'center',
  },
  linkText: {
    color: '#146FE4',
  }
}
);

export default withNavigation(NavLink);
