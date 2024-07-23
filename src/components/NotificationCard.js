import {observer} from 'mobx-react-lite';
import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {height, hp, RFValue, wp} from '../helpers/responsive';
import {FONTS, images} from '../constants';

const NotificationCard = observer(
  ({
    date,
    description1,
    description2,
    description3,
    how1,
    how2,
    how3,
    imagee1,
    imagee2,
    imagee3,
    complete,
  }) => {
    const [textValue, setTextValue] = useState(null);

    return (
      <View style={styles.container}>
        <View style={{marginTop: hp(1)}}>
          <Text
            style={{
              width: wp(90),
              color: 'black',
              fontSize: RFValue(16.5),
            }}>
            {date}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(1.5),
            }}>
            <Image source={imagee1} style={{height: hp(4), width: wp(8)}} />
            <View>
              <Text
                style={{
                  width: wp(76),
                  color: 'black',
                  fontSize: RFValue(14),
                  marginLeft: wp(4),
                }}>
                {description1}
              </Text>
              <Text
                style={{
                  width: wp(70),
                  color: '#18A0FB',
                  fontSize: RFValue(11),
                  marginLeft: wp(4),
                  fontFamily: FONTS.bold,
                  marginTop: hp(1),
                }}>
                {how1}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(4),
          }}>
          <Image source={imagee2} style={{height: hp(4), width: wp(8)}} />
          <View>
            <Text
              style={{
                width: wp(76),
                color: 'black',
                fontSize: RFValue(14),
                marginLeft: wp(4),
              }}>
              {description2}
            </Text>
            <Text
              style={{
                width: wp(70),
                color: '#18A0FB',
                fontSize: RFValue(11),
                marginLeft: wp(4),
                fontFamily: FONTS.bold,
                marginTop: hp(1),
              }}>
              {how2}
            </Text>
            <Text
              style={{
                width: wp(70),
                color: '#18A0FB',
                fontSize: RFValue(13),
                left: wp(19.5),
                position: 'absolute',
                top: hp(2.3),
              }}>
              {complete}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(4.5),
            marginBottom: hp(3.5),
          }}>
          <Image source={imagee3} style={{height: hp(4), width: wp(8)}} />
          <View>
            <Text
              style={{
                width: wp(76),
                color: 'black',
                fontSize: RFValue(14),
                marginLeft: wp(4),
              }}>
              {description3}
            </Text>
            <Text
              style={{
                width: wp(70),
                color: '#18A0FB',
                fontSize: RFValue(11),
                marginLeft: wp(4),
                fontFamily: FONTS.bold,
                marginTop: hp(1.5),
              }}>
              {how3}
            </Text>
          </View>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {},
});

export default NotificationCard;
