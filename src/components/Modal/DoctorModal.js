import AsyncStorage from '@react-native-async-storage/async-storage';
import {toJS} from 'mobx';
import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import store from '../../store/store';
import {COLORS, FONTS, images} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {hp, RFValue, wp} from '../../helpers/responsive';
import {useNavigation} from '@react-navigation/native';

const height = Dimensions.get('window').height;

const DoctorModal = observer(() => {
  const [isVisible, setIsVisible] = useState(store.DoctorModal);

  const close = () => {
    setIsVisible(false);
    setTimeout(() => {
      store.update('DoctorModal', false);
    }, 400);
  };

  const navigation = useNavigation();

  const handleCancel = () => {
    close(); // Modalı kapat
  };

  const data = [
    {
      id: 1,
      name: 'Dermatology',
      time: '10:00 AM ',
    },
    {
      id: 2,
      name: 'Cardiologist',
      time: '10:30 AM ',
    },
    {
      id: 3,
      name: 'Pediactris',
      time: '11:00 AM ',
    },
    {
      id: 4,
      name: 'Ophthalmology',
      time: '10:45 AM ',
    },
  ];

  const hour = [
    {
      id: 1,
      time: '10:00 AM ',
    },
    {
      id: 2,
      time: '10:30 AM ',
    },
    {
      id: 3,
      time: '11:00 AM ',
    },
    {
      id: 4,
      time: '10:45 AM ',
    },
    {
      id: 4,
      time: '11:15 AM ',
    },
  ];
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const [selectedHour, setSelectedHour] = useState(0);

  return (
    <Modal
      hardwareAccelerated={false}
      swipeDirection="down"
      onSwipeComplete={close}
      onBackdropPress={close}
      animationInTiming={800}
      animationOutTiming={400}
      backdropTransitionOutTiming={400}
      backdropColor={COLORS.modalOpacity}
      isVisible={isVisible}
      style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <Image
          source={images.line}
          style={{height: hp(1), top: hp(2), width: wp(10)}}
          resizeMode="contain"
        />
        <Text
          style={{
            marginTop: hp(3),
            fontSize: RFValue(15.5),
            color: 'black',
            fontFamily: FONTS.medium,
            width: wp(90),
          }}>
          Categori
        </Text>

        <View style={{marginTop: hp(1)}}>
          <FlatList
            style={{flexGrow: 0}}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              const isSelected = index === selectedFilterIndex;
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedFilterIndex(index);
                  }}
                  style={{
                    backgroundColor: isSelected ? '#18A0FB' : 'white',
                    marginLeft: wp(3),
                    borderRadius: wp(1.5),
                    height: hp(5),
                    marginTop: hp(2),
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      color: isSelected ? 'white' : 'black',
                      fontFamily: FONTS.medium,
                      paddingLeft: wp(3),
                      paddingRight: wp(3),
                      textAlign: 'center',
                      paddingTop: hp(1.3),
                    }}>
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text
          style={{
            marginTop: hp(3),
            fontSize: RFValue(18),
            color: 'black',
            fontFamily: FONTS.medium,
            width: wp(90),
          }}>
          Time
        </Text>

        <View>
          <FlatList
            style={{
              flexGrow: 0,
              width: wp(100),
              alignSelf: 'center',
            }}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            data={hour}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              const isSelected = index === selectedHour;
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedHour(index);
                  }}
                  style={{
                    backgroundColor: isSelected ? '#18A0FB' : 'white',
                    borderRadius: wp(1.5),
                    height: hp(5),
                    marginTop: hp(2),
                    marginLeft: wp(5),
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      color: isSelected ? 'white' : 'black',
                      fontFamily: FONTS.medium,
                      paddingLeft: wp(3),
                      paddingRight: wp(3),
                      textAlign: 'center',
                      paddingTop: hp(1.3),
                    }}>
                    {item?.time}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            width: wp(85),
            height: hp(6.5),
            backgroundColor: '#18A0FB',
            alignSelf: 'center',
            marginTop: hp(3),
            borderRadius: wp(3),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handleCancel}>
          <Text
            style={{
              color: 'white',
              fontFamily: FONTS.medium,
              fontSize: RFValue(14),
            }}>
            Apply Filters
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: wp(60),
            height: hp(6),
            alignSelf: 'center',
            marginTop: hp(2),
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: hp(1),
          }}
          onPress={handleCancel}>
          <Text
            style={{
              color: 'black',
              fontFamily: FONTS.medium,
              fontSize: RFValue(14),
            }}>
            Clear Filters
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(70),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: wp(8),
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#3B3A4C',
    top: 310,
  },
});

export default DoctorModal;
