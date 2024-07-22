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
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const DoctorProfile = observer(({navigation: {navigate, goBack}, route}) => {
  const {doctorName, doctorSpecialist} = route.params;
  const data = [
    {
      id: 1,
      imagee: images.heart,
      text: '150+',
      twoText: 'Patient',
    },
    {
      id: 2,
      imagee: images.king,
      text: '10 years',
      twoText: 'Experince',
    },
    {
      id: 3,
      imagee: images.rating,
      text: '4.9',
      twoText: 'Rating',
    },
  ];

  const date = [
    {id: 1, date: '12', day: 'Mon'},
    {id: 2, date: '13', day: 'Tue'},
    {id: 3, date: '14', day: 'Wed'},
    {id: 4, date: '15', day: 'Thu'},
    {id: 5, date: '16', day: 'Fri'},
    {id: 6, date: '17', day: 'Sat'},
  ];

  const morning = [
    {
      id: 1,
      time: '10:30 am',
    },
    {
      id: 2,
      time: '11:00 am',
    },
    {
      id: 3,
      time: '11:30 am',
    },
  ];

  const afternoon = [
    {
      id: 1,
      time: '02:30 am',
    },
    {
      id: 2,
      time: '03:00 am',
    },
    {
      id: 3,
      time: '03:30 am',
    },
  ];

  const [doctorIndex, setDocdoctorIndex] = useState(0);

  const [selectedDate, setSelectedDate] = useState(0);

  const [selectedMorning, setSelectedMorning] = useState(0);

  const [selectedAfternoon, setSelectedAfternoon] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
      <View style={styles.oneView}>
        <TouchableOpacity
          onPress={() => {
            if (doctorIndex === 0) {
              navigate('Main');
            } else {
              setDocdoctorIndex(doctorIndex - 1);
            }
          }}>
          <Image source={images.back} style={{height: hp(6), width: wp(12)}} />
        </TouchableOpacity>
        <Text style={styles.doctorDetail}>Doctor Detail</Text>
      </View>

      <Image
        source={images.bigdr}
        style={{height: hp(15), width: wp(30)}}
        resizeMode="contain"
      />

      <FlatList
        contentContainerStyle={{marginTop: hp(4), gap: wp(10)}}
        style={{flexGrow: 0}}
        horizontal
        data={data}
        keyExtractor={item => {
          item.id;
        }}
        renderItem={({item, index}) => {
          return (
            <View style={{alignItems: 'center'}}>
              <Image
                source={item?.imagee}
                style={{height: hp(5.5), width: wp(11)}}
                resizeMode="contain"
              />
              <Text style={styles.itemText}>{item?.text}</Text>
              <Text style={styles.twoText}>{item?.twoText}</Text>
            </View>
          );
        }}
      />

      {doctorIndex === 0 ? (
        <View style={styles.doctorOneView}>
          <Text style={styles.doctorName}>{doctorName}</Text>

          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={styles.doctorSpecialist}>
              {doctorSpecialist} - {''}
            </Text>
            <Text style={styles.cumilla}>Cumilla Madical Collage</Text>
          </View>

          <Image
            source={images.star}
            style={{height: hp(2.5), width: wp(35), alignSelf: 'center'}}
            resizeMode="contain"
          />

          <Text style={styles.about}>About Doctor</Text>
          <Text style={styles.longText}>
            Dr. Kawsar Ahmed is the top most Cardiologist specialist in Cumilla
            Medical Collage Hospital At Cumilla. He achived several awards foe
            his wonderful confriution in his own field. He is avaliable for
            privet consulatation. He achived several awards foe his wonderful
            confriution in his own field. He is avaliable for privet
            consulatation.
          </Text>
          <View style={styles.recentView}>
            <Text style={styles.recent}>Recent comments</Text>
            <Text style={styles.hour2}>2 Hour Ago</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              width: wp(90),
              alignItems: 'center',
              marginTop: hp(2),
            }}>
            <Image
              source={images.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Image
              source={images.star}
              style={{height: hp(2.3), width: wp(30), alignSelf: 'center'}}
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              setDocdoctorIndex(doctorIndex + 1);
            }}
            style={styles.oneTouchable}>
            <Text style={styles.get}>Get Appointment</Text>
          </TouchableOpacity>
        </View>
      ) : doctorIndex === 1 ? (
        <View style={styles.twoView}>
          <Text style={styles.february}>February</Text>

          <View>
            <FlatList
              contentContainerStyle={{
                gap: wp(2),
                marginLeft: wp(4),
                marginTop: hp(2),
              }}
              style={{flexGrow: 0}}
              horizontal
              data={date}
              keyExtractor={item => {
                item.id;
              }}
              renderItem={({item, index}) => {
                const isSelected = index === selectedDate;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedDate(index);
                    }}
                    style={{
                      backgroundColor: isSelected ? '#18A0FB' : 'white',
                      height: hp(7.5),
                      width: wp(14),
                      alignSelf: 'center',
                      borderTopLeftRadius: wp(3),
                      borderBottomRightRadius: wp(3),
                    }}>
                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        fontSize: RFValue(13),
                        color: isSelected ? 'white' : 'black',
                        alignSelf: 'center',
                        marginTop: hp(1),
                      }}>
                      {item?.day}
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        fontSize: RFValue(15.5),
                        color: isSelected ? 'white' : '#979797',
                        alignSelf: 'center',
                      }}>
                      {item?.date}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <Text style={styles.morning}>Morning Slots</Text>

          <View>
            <FlatList
              contentContainerStyle={{
                gap: wp(5),
                marginLeft: wp(4),
                marginTop: hp(2),
              }}
              style={{flexGrow: 0}}
              horizontal
              data={morning}
              keyExtractor={item => {
                item.id;
              }}
              renderItem={({item, index}) => {
                const isSelected = index === selectedMorning;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedMorning(index);
                    }}
                    style={{
                      backgroundColor: isSelected ? '#18A0FB' : 'white',
                      height: hp(4),
                      alignSelf: 'center',
                      borderTopLeftRadius: wp(3),
                      borderBottomRightRadius: wp(3),
                    }}>
                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        fontSize: RFValue(13),
                        color: isSelected ? 'white' : '#979797',
                        alignSelf: 'center',
                        marginTop: hp(0.8),
                        paddingLeft: wp(6),
                        paddingRight: wp(6),
                      }}>
                      {item?.time}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <Text style={styles.afternoon}>Afternoon Slots</Text>

          <View>
            <FlatList
              contentContainerStyle={{
                gap: wp(3),
                marginLeft: wp(4),
                marginTop: hp(2),
              }}
              style={{flexGrow: 0}}
              horizontal
              data={afternoon}
              keyExtractor={item => {
                item.id;
              }}
              renderItem={({item, index}) => {
                const isSelected = index === selectedAfternoon;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedAfternoon(index);
                    }}
                    style={{
                      backgroundColor: isSelected ? '#18A0FB' : 'white',
                      height: hp(4),
                      alignSelf: 'center',
                      borderTopLeftRadius: wp(3),
                      borderBottomRightRadius: wp(3),
                    }}>
                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        fontSize: RFValue(13),
                        color: isSelected ? 'white' : '#979797',
                        alignSelf: 'center',
                        marginTop: hp(0.8),
                        paddingLeft: wp(6),
                        paddingRight: wp(6),
                      }}>
                      {item?.time}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              setDocdoctorIndex(doctorIndex + 1);
            }}
            style={styles.twoTouchable}>
            <Text style={styles.twoGet}>Get Appointment</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.threeOneView}>
          <Image
            source={images.line}
            style={styles.line}
            tintColor={'#979797'}
            resizeMode="contain"
          />
          <Image
            source={images.good}
            style={styles.good}
            resizeMode="contain"
          />
          <Text style={styles.thanks}>Thanks You!</Text>
          <Text style={styles.your}>Your Appointment Created.</Text>

          <Text style={styles.you}>
            You booked an appoinment with dr. Kawsar Ahmed on sep 21, at 10:00
            am
          </Text>

          <TouchableOpacity
            style={styles.threeTouchable}
            onPress={() => {
              navigate('Payment');
            }}>
            <Text style={styles.threeGet}>Get Appointment</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#18A0FB',
    paddingTop: StatusBar.currentHeight * 2,
  },
  oneView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
  },
  doctorDetail: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(20),
    color: 'white',
    marginLeft: wp(15),
  },
  itemText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'white',
    marginTop: hp(0.5),
  },
  twoText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(7),
    color: 'white',
  },
  doctorOneView: {
    backgroundColor: '#F9F9F9',
    width: wp(100),
    height: hp(61.9),
    marginTop: hp(2.5),
    borderTopLeftRadius: wp(15),
    borderTopRightRadius: wp(15),
  },
  doctorName: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(19),
    color: 'black',
    marginTop: hp(3),
    textAlign: 'center',
  },
  doctorSpecialist: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(9.5),
    color: '#979797',
    marginTop: hp(0.1),
  },
  cumilla: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(9.5),
    color: '#979797',
    marginTop: hp(0.1),
  },
  about: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'black',
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(3),
  },
  longText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(14.5),
    color: '#979797',
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2),
  },
  recentView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: wp(90),
    alignItems: 'center',
    marginTop: hp(4),
  },
  recent: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(14.5),
    color: 'black',
    marginTop: hp(0.1),
  },
  hour2: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(13),
    color: '#979797',
    marginTop: hp(0.1),
  },
  image: {
    height: hp(5),
    width: wp(10),
    alignSelf: 'center',
    borderRadius: wp(100),
  },
  oneTouchable: {
    width: wp(90),
    height: hp(7),
    backgroundColor: '#18A0FB',
    alignSelf: 'center',
    marginTop: hp(1.5),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  get: {
    color: 'white',
    fontFamily: FONTS.medium,
    fontSize: RFValue(14),
  },
  twoView: {
    backgroundColor: '#F9F9F9',
    width: wp(100),
    height: hp(61.9),
    marginTop: hp(2.5),
    borderTopLeftRadius: wp(15),
    borderTopRightRadius: wp(15),
  },
  february: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(16),
    color: 'black',
    marginTop: hp(5),
    width: wp(90),
    alignSelf: 'center',
  },
  morning: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'black',
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(4),
  },
  afternoon: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'black',
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(4),
  },

  twoTouchable: {
    width: wp(90),
    height: hp(7),
    backgroundColor: '#18A0FB',
    alignSelf: 'center',
    marginTop: hp(7),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  twoGet: {
    color: 'white',
    fontFamily: FONTS.medium,
    fontSize: RFValue(14),
  },
  threeOneView: {
    backgroundColor: '#F9F9F9',
    width: wp(100),
    height: hp(61.9),
    marginTop: hp(2.5),
    borderTopLeftRadius: wp(15),
    borderTopRightRadius: wp(15),
  },
  line: {
    height: hp(0.9),
    marginTop: hp(2),
    width: wp(13),
    alignSelf: 'center',
  },
  good: {
    height: hp(9),
    width: wp(18),
    alignSelf: 'center',
    marginTop: hp(8),
  },
  thanks: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(18),
    color: 'black',
    marginTop: hp(8),
    width: wp(100),
    textAlign: 'center',
  },
  your: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(18),
    color: 'black',
    width: wp(100),
    textAlign: 'center',
  },
  you: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(16),
    color: '#979797',
    width: wp(80),
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  threeTouchable: {
    width: wp(90),
    height: hp(7),
    backgroundColor: '#18A0FB',
    alignSelf: 'center',
    marginTop: hp(10),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  threeGet: {
    color: 'white',
    fontFamily: FONTS.medium,
    fontSize: RFValue(14),
  },
});

export default DoctorProfile;
