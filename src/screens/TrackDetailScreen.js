import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const trackDetail = state.find(track => track._id === _id);
  const initialCoords = trackDetail.locations[0].coords;

  return (
    <>
      <MapView
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline
          coordinates={trackDetail.locations.map(location => location.coords)}
        />
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  }
});

export default TrackDetailScreen;
