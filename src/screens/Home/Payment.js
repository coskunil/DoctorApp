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
  FlatList,
  ScrollView,
} from 'react-native';
import {height, hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';

const Payment = observer(({navigation: {navigate, goBack}}) => {
  const data = [
    {
      id: 1,
      imagee: images.credit,
      text: 'Credit Card',
    },
    {
      id: 2,
      imagee: images.google,
      text: 'Google Pay',
    },
    {
      id: 3,
      imagee: images.apple,
      text: 'Apple Pay',
    },
    {
      id: 4,
      imagee: images.paypal,
      text: 'Paypal',
    },
  ];

  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
      <View style={styles.oneView}>
        <TouchableOpacity>
          <Image source={images.back} style={{height: hp(6), width: wp(12)}} />
        </TouchableOpacity>
        <Text style={styles.Payment}>Payment</Text>
      </View>

      <TouchableOpacity style={styles.touchView}>
        <Image
          source={images.womandr}
          style={{height: hp(8), width: wp(16), marginLeft: wp(3)}}
        />
        <View style={{marginLeft: wp(4), height: hp(8.5)}}>
          <Text style={styles.drText}>Dr. Kawsar Ahmed</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cardio}>Cardiologist - {''}</Text>
            <Text style={styles.cumila}>Cumilla Madical Collage</Text>
          </View>
          <Text style={styles.got}>Got Appointment</Text>
          <TouchableOpacity style={styles.miniTouc}>
            <Text style={styles.dolar}>$20</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <FlatList
        style={{flexGrow: 0}}
        contentContainerStyle={{marginTop: hp(9)}}
        data={data}
        keyExtractor={item => {
          item.id;
        }}
        renderItem={({item, index}) => {
          const isSelected = index === selected;
          return (
            <TouchableOpacity
              onPress={() => {
                setSelected(index);
              }}
              style={styles.flatTouchable}>
              <Image
                source={item?.imagee}
                style={{height: hp(3.5), width: wp(6), marginLeft: wp(4)}}
                resizeMode="contain"
              />
              <Text style={styles.itemText}>{item?.text}</Text>

              <View style={styles.touc}>
                <TouchableOpacity
                  onPress={() => {
                    setSelected(index);
                  }}
                  style={{
                    height: hp(2),
                    width: wp(4),
                    backgroundColor: isSelected ? '#18A0FB' : 'white',
                    borderRadius: wp(100),
                    alignSelf: 'center',
                    marginTop: hp(0.1),
                  }}></TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <View style={{marginTop: hp(10)}}>
        <TouchableOpacity
          onPress={() => {
            navigate('Doctor');
          }}
          style={styles.paymentTouch}>
          <Text style={styles.payment}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: StatusBar.currentHeight * 2,
    backgroundColor: '#F9F9F9',
  },
  oneView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
  },
  Payment: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(18),
    color: 'black',
    marginLeft: wp(21),
  },
  touchView: {
    backgroundColor: 'white',
    height: hp(11.5),
    width: wp(90),
    marginTop: hp(6),
    borderRadius: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  drText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'black',
  },
  cardio: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(9.5),
    color: '#979797',
    marginTop: hp(0.1),
  },
  cumila: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(9.5),
    color: '#979797',
    marginTop: hp(0.1),
  },
  got: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(9.5),
    color: '#18A0FB',
    marginTop: hp(1.3),
    backgroundColor: '#EDF7FF',
    width: wp(28),
    textAlign: 'center',
    height: hp(2.3),
    paddingTop: hp(0.3),
    borderRadius: wp(1.2),
  },
  miniTouc: {
    backgroundColor: '#18A0FB',
    height: hp(3),
    width: wp(11),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    position: 'absolute',
    left: wp(53),
    top: hp(5.5),
  },
  dolar: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(11),
    color: 'white',
  },
  flatTouchable: {
    height: hp(7),
    width: wp(90),
    backgroundColor: 'white',
    marginTop: hp(2.5),
    borderRadius: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: 'black',
    fontSize: RFValue(17),
    marginLeft: wp(5),
    width: wp(30),
  },
  touch: {
    height: hp(2.5),
    width: wp(5),
    borderRadius: wp(100),
    borderWidth: wp(0.3),
    borderColor: '#006B2B',
    marginLeft: wp(35),
  },
  paymentTouch: {
    height: hp(7.5),
    width: wp(90),
    backgroundColor: '#18A0FB',
    borderRadius: wp(3),
    marginTop: hp(6.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  payment: {
    color: 'white',
    fontSize: RFValue(18),
    textAlign: 'center',
  },
});

export default Payment;
