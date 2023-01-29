import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MyButton from './myButton';

export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize:20 }}>{addition}</Text>
      <Text style={{ fontSize:20 }}>{multiple}</Text>
      <MyButton title='addition' onPress={() => setAddition(addition + 2)}/>
      <MyButton title='multiple' onPress={() => setMultiple(multiple * 2)}/>
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
