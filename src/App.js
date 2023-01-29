import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyButton from './myButton';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MyButton title={123}/>  */}
      <MyButton title='MyButton2' onPress={() => alert('2')}>
        MyButton 3 
      </MyButton>  
      <MyButton>children</MyButton>
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
