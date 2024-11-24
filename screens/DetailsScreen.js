import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { place } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: place.image }} style={styles.image} />
      <Text style={styles.title}>{place.title}</Text>
      <Text style={styles.description}>{place.description}</Text>
      <Button title="Zapisz offline" onPress={() => alert('Miejsce zapisane!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 16, color: '#555', marginBottom: 16 },
});

export default DetailsScreen;
