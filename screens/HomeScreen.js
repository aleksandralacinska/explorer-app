import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const recommendations = [
    { id: '1', title: 'Zamek Królewski', description: 'Historyczne miejsce', image: 'https://www.zamek-krolewski.pl/sites/default/files/styles/ostatnie_realizacje_tresc/public/2022/03/1342/fotorelacja/120921%20ZAMEK%20DRON%2030.jpg?h=8dea6ba1&itok=xBGE_RzO' },
    { id: '2', title: 'Wigierski Park Narodowy', description: 'Piękne krajobrazy', image: 'https://zpppn.pl/img/images/Wigierski/image01.jpg' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={recommendations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', { place: item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { flexDirection: 'row', marginBottom: 16, backgroundColor: '#fff', borderRadius: 8, padding: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 },
  image: { width: 50, height: 50, borderRadius: 8, marginRight: 16 },
  title: { fontSize: 16, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555' },
});

export default HomeScreen;
