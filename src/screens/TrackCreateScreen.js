import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

// import '../_mockLocation'; //uncomment if using a physical device
import { Map } from '../components';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [error] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView style={styles.screenContainer} forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error && <Text>Please enable location services</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 25,
  }
});

export default withNavigationFocus(TrackCreateScreen);
