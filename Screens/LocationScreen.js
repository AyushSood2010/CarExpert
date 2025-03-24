import React from 'react';
import { View, Text, Button, PermissionsAndroid } from 'react-native';

export default function LocationScreen({ navigation }) {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        navigation.replace('Home'); // Move to Home page after permission
      } else {
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View>
      <Text>We need your location to show nearby cars</Text>
      <Button title="Grant Location Permission" onPress={requestLocationPermission} />
    </View>
  );
}
