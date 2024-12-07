import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const OnlineMapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 52.2297, // Warszawa - przykładowe współrzędne
    longitude: 21.0122,
    latitudeDelta: 5, // Powiększony widok, aby wszystkie miasta były widoczne
    longitudeDelta: 5,
  });

  const cities = [
    {
      latitude: 52.2297,
      longitude: 21.0122,
      title: "Warszawa",
      description: "Stolica Polski",
    },
    {
      latitude: 50.0647,
      longitude: 19.945,
      title: "Kraków",
      description: "Miasto Smoka Wawelskiego",
    },
    {
      latitude: 54.352,
      longitude: 18.6466,
      title: "Gdańsk",
      description: "Miasto Neptuna",
    },
    {
      latitude: 51.1079,
      longitude: 17.0385,
      title: "Wrocław",
      description: "Miasto krasnali",
    },
    {
      latitude: 52.4064,
      longitude: 16.9252,
      title: "Poznań",
      description: "Miasto koziołków",
    },
    {
      latitude: 51.7592,
      longitude: 19.456,
      title: "Łódź",
      description: "Stolica polskiego filmu",
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {cities.map((city, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: city.latitude,
              longitude: city.longitude,
            }}
            title={city.title}
            description={city.description}
          />
        ))}
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
