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
  ({date, description, how, imagee, complete}) => {
    const [textValue, setTextValue] = useState(null);

    return (
      <View style={styles.container}>
        <View style={{marginTop: hp(2)}}>
          <Text
            style={{
              width: wp(90),
              color: 'black',
              fontSize: RFValue(16),
              marginBottom: hp(-3),
            }}>
            {date}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(1),
            }}>
            <Image source={imagee} style={{height: hp(4), width: wp(8)}} />
            <View>
              <Text
                style={{
                  width: wp(76),
                  color: 'black',
                  fontSize: RFValue(14),
                  marginLeft: wp(4),
                }}>
                {description}
              </Text>
              <Text
                style={{
                  width: wp(70),
                  color: '#18A0FB',
                  fontSize: RFValue(11),
                  marginLeft: wp(4),
                  fontFamily: FONTS.bold,
                  marginTop: hp(0.5),
                }}>
                {how}
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
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {},
});

export default NotificationCard;
