import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestForegroundPermissionsAsync } from 'expo-location';

import '../_mockLocation';
import { Map } from '../components';

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) throw new Error('Location permission not granted');
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error && <Text>Please enable location services</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;
