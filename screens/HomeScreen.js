import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const recommendations = [
    {
      id: '1',
      title: 'Zamek Królewski',
      description: 'Historyczne miejsce',
      image: 'https://www.zamek-krolewski.pl/sites/default/files/styles/ostatnie_realizacje_tresc/public/2022/03/1342/fotorelacja/120921%20ZAMEK%20DRON%2030.jpg?h=8dea6ba1&itok=xBGE_RzO',
    },
    {
      id: '2',
      title: 'Wigierski Park Narodowy',
      description: 'Piękne krajobrazy',
      image: 'https://zpppn.pl/img/images/Wigierski/image01.jpg',
    },
    {
      id: '3',
      title: 'Morskie Oko',
      description: 'Najpiękniejsze jezioro w Tatrach',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Morskie_Oko_%28Tatry%2C_Polska%29_2.jpg/1200px-Morskie_Oko_%28Tatry%2C_Polska%29_2.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Lista miejsc ograniczona do 70% wysokości ekranu */}
      <ScrollView style={styles.scrollView}>
        {recommendations.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate('Details', { place: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
  
      {/* Przyciski zawsze widoczne na dole */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
          <Text style={styles.buttonText}>Zobacz mapę lokalną</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnlineMap')}>
          <Text style={styles.buttonText}>Zobacz mapę internetową</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SavedPlaces')}>
          <Text style={styles.buttonText}>Zapisane miejsca</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollView: {
    height: '70%', // ScrollView zajmuje 70% wysokości ekranu
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: { width: 50, height: 50, borderRadius: 8, marginRight: 16 },
  title: { fontSize: 16, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555' },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Przyciski umieszczone na dole
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
