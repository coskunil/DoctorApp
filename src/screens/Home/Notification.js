import {observer} from 'mobx-react-lite';
import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import {height, hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import NotificationCard from '../../components/NotificationCard';

const Notification = observer(({navigation: {navigate, goBack}}) => {
  const data = [
    {
      id: 1,
      date: 'Today - 20 Sep, 2020',
      description1:
        'Your have appointment with mahbuba isl am at 9:00 pm today',
      how1: 'Just Now',
      imagee1: images.blue,
      description2: 'Completed your profile to be better health consults.',
      how2: '25 Minutes ago',
      imagee2: images.orange,
      complete: ' Complete Profile',
      description3:
        'Your have appointment with mahbuba isl am at 9:00 pm today',
      how3: 'Just Now',
      imagee3: images.navyblue,
    },
    {
      id: 2,
      date: '19 Sep, 2020',
      description1:
        'Your have appointment with mahbuba isl am at 9:00 pm today',
      how1: 'Just Now',
      imagee1: images.purple,
      description2: 'Completed your profile to be better health consults.',
      how2: '25 Minutes ago',
      imagee2: images.orange,
      complete: ' Complete Profile',
      description3:
        'Your have appointment with mahbuba isl am at 9:00 pm today',
      how3: 'Just Now',
      imagee3: images.navyblue,
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: wp(90),
        }}>
        <TouchableOpacity>
          <Image source={images.back} style={{height: hp(6), width: wp(12)}} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: RFValue(18),
            color: 'black',
            marginLeft: wp(20),
          }}>
          Notification
        </Text>
      </View>

      <FlatList
        style={{flexGrow: 0}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: hp(0.1)}}
        data={data}
        keyExtractor={item => {
          item.id;
        }}
        renderItem={({item, index}) => {
          return (
            <NotificationCard
              date={item.date}
              description1={item.description1}
              how1={item.how1}
              imagee1={item.imagee1}
              description2={item.description2}
              how2={item.how2}
              imagee2={item.imagee2}
              description3={item.description3}
              how3={item.how3}
              imagee3={item.imagee3}
              complete={item.complete}
            />
          );
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: StatusBar.currentHeight * 2,
  },
});

export default Notification;
