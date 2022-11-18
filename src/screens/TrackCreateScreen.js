import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

// import '../_mockLocation'; //uncomment if using a virtual device
import { Map, TrackForm } from '../components';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording }, addLocation } = useContext(LocationContext);
  const callback = useCallback((location) => {
    addLocation(location, recording);
  }, [recording]);
  const [error] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView style={styles.screenContainer} forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error && <Text>Please enable location services</Text>}
      <TrackForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 25,
  }
});

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

export default withNavigationFocus(TrackCreateScreen);
