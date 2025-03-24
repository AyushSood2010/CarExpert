import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function HomeScreen({ navigation }) {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    firestore().collection('cars').onSnapshot(snapshot => {
      const carList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCars(carList);
    });
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Search for a car..."
        onChangeText={setSearchQuery}
        style={{ padding: 10, borderBottomWidth: 1 }}
      />
      <FlatList
        data={cars.filter(car => car.name.toLowerCase().includes(searchQuery.toLowerCase()))}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('CarDetail', { car: item })}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
