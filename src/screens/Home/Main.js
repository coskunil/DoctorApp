import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import store from '../../store/store';

const Main = () => {
  const [textValue, setTextValue] = useState(null);

  useEffect(() => {
    console.log(textValue);
  }, [textValue]);

  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>{textValue}</Text>

      <TextInput
        onChangeText={value => {
          setTextValue(value);
        }}
        value={textValue}
        placeholder="Buraya yazı"
      />
      <Text style={{color: 'black'}}>{store.userData.name}</Text>
      <Text style={{color: 'black'}}>{store.userData.email}</Text>
      <Text style={{color: 'black'}}>{store.userData.password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Main;
