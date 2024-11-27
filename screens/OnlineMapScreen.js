import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const OnlineMapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 52.2297, // Warszawa - przykładowe współrzędne
    longitude: 21.0122,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        // OpenStreetMap jest domyślnym dostawcą, nie musimy podawać PROVIDER_GOOGLE
      >
        <Marker
          coordinate={{
            latitude: 52.2297,
            longitude: 21.0122,
          }}
          title="Warszawa"
          description="Stolica Polski"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default OnlineMapScreen;
