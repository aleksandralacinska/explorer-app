import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SavedPlacesScreen = () => {
  const savedPlaces = [
    { id: '1', title: 'Zamek Królewski' },
    { id: '2', title: 'Wigierski Park Narodowy' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={savedPlaces}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { fontSize: 18, padding: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default SavedPlacesScreen;
