import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyButton from './myButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi, there</Text>
      <StatusBar style="auto" />
      <Button title="Button" onPress={() => alert('click!')} />
      <MyButton />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
