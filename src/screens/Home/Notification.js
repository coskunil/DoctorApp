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
    },
    {
      id: 2,
      description: 'Your have appointment with mahbuba isl am at 9:00 pm today',
      how: 'Just Now',
      imagee: images.blue,
    },
    {
      id: 3,
      description: 'Completed your profile to be better health consults.',
      how: '25 Minutes ago',
      imagee: images.orange,
      complete: ' Complete Profile',
    },
    {
      id: 4,
      description: 'Your have appointment with mahbuba isl am at 9:00 pm today',
      how: 'Just Now',
      imagee: images.navyblue,
    },
    {
      id: 5,
      date: '20 Sep, 2020',
    },
    {
      id: 6,
      description: 'Your have appointment with mahbuba isl am at 9:00 pm today',
      how: 'Just Now',
      imagee: images.blue,
    },
    {
      id: 7,
      description: 'Completed your profile to be better health consults.',
      how: '25 Minutes ago',
      imagee: images.orange,
      complete: ' Complete Profile',
    },
    {
      id: 8,
      description: 'Your have appointment with mahbuba isl am at 9:00 pm today',
      how: 'Just Now',
      imagee: images.navyblue,
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
        contentContainerStyle={{}}
        data={data}
        keyExtractor={item => {
          item.id;
        }}
        renderItem={({item, index}) => {
          return (
            <NotificationCard
              date={item?.date}
              imagee={item?.imagee}
              description={item?.description}
              how={item?.how}
              complete={item?.complete}
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
