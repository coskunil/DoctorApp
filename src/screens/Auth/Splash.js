import {observer} from 'mobx-react-lite';
import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  ScrollView,
  BackHandler,
} from 'react-native';
import {height, hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import store from '../../store/store';

const Splash = observer(({navigation: {navigate, goBack}}) => {
  useEffect(() => {
    setTimeout(() => {
      if (store.userData.name) {
        navigate('Main');
      } else {
        navigate('SignIn');
      }
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
      <Image
        source={images.splashbg}
        style={{
          height: hp(105),
          width: wp(100),
          zIndex: 1,
        }}
      />
      <Image
        source={images.logo}
        style={{
          height: hp(31),
          width: wp(62),
          zIndex: 1,
          position: 'absolute',
          marginTop: hp(30),
        }}
        resizeMode="contain"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#18A0FB',
    alignItems: 'center',
    flex: 1,
  },
});

export default Splash;
