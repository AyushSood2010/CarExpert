import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CarDetailScreen({ route }) {
  const { car } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Text style={styles.name}>{car.name}</Text>
      <Text>Price: {car.price}</Text>
      <Text>Power: {car.power}</Text>
      <Text>Torque: {car.torque}</Text>
      <Text>Engine: {car.engine}</Text>
      <Text>Body Type: {car.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200 },
  name: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
});
