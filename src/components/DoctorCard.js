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
} from 'react-native';
import {height, hp, RFValue, wp} from '../helpers/responsive';
import {FONTS, images} from '../constants';

const DoctorCard = observer(({imagee, name, specialist, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        height: hp(11.5),
        width: wp(90),
        marginTop: hp(1.5),
        borderRadius: wp(2),
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={imagee}
        style={{height: hp(8), width: wp(16), marginLeft: wp(3)}}
      />
      <View style={{marginLeft: wp(4), height: hp(8.5)}}>
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: RFValue(15),
            color: 'black',
          }}>
          {name}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: RFValue(9.5),
              color: '#979797',
              marginTop: hp(0.1),
            }}>
            {specialist} - {''}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: RFValue(9.5),
              color: '#979797',
              marginTop: hp(0.1),
            }}>
            Cumilla Madical Collage
          </Text>
        </View>
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: RFValue(9.5),
            color: '#18A0FB',
            marginTop: hp(1.3),
            backgroundColor: '#EDF7FF',
            width: wp(30),
            textAlign: 'center',
            height: hp(2.3),
            paddingTop: hp(0.3),
            borderRadius: wp(1.2),
          }}>
          10:20 AM - 12:30 PM
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#18A0FB',
            height: hp(3),
            width: wp(6),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: wp(100),
            position: 'absolute',
            left: wp(58),
            top: hp(5.5),
          }}>
          <Image
            source={images.plus}
            style={{
              height: hp(2),
              width: wp(2.5),
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {},
});

export default DoctorCard;
