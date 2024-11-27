import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SavedPlacesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tutaj będą zapisane miejsca offline.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, color: '#555' },
});

export default SavedPlacesScreen;
