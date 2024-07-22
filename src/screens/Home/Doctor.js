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
import DoctorCard from '../../components/DoctorCard';
import store from '../../store/store';
import {Modal} from 'react-native';
import DoctorModal from '../../components/Modal/DoctorModal';

const Doctor = observer(({navigation: {navigate, goBack}}) => {
  const data = [
    {
      id: 1,
      imagee: images.womandr,
      name: 'Dr. Mahbuba Islam',
      specialist: 'Cardiologist',
    },
    {
      id: 2,
      imagee: images.mendr,
      name: 'Dr. Kawsar Ahmed',
      specialist: 'Dermatology',
    },
    {
      id: 3,
      imagee: images.womandr,
      name: 'Dr. Mahbuba Islam',
      specialist: 'Cardiologist',
    },
    {
      id: 4,
      imagee: images.mendr,
      name: 'Dr. Kawsar Ahmed',
      specialist: 'Dermatology',
    },
    {
      id: 5,
      imagee: images.womandr,
      name: 'Dr. Mahbuba Islam',
      specialist: 'Cardiologist',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter(item =>
      item.specialist.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar
          backgroundColor={'transparent'}
          translucent
          barStyle={'light-content'}
        />
        <View style={styles.oneView}>
          <TouchableOpacity>
            <Image
              source={images.back}
              style={{height: hp(6), width: wp(12)}}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.select}>Select</Text>
            <Image
              source={images.select}
              style={styles.selectIcon}
              resizeMode="contain"
            />
          </View>
        </View>

        <View>
          <TextInput
            style={styles.searchInput}
            placeholder="Seacrh"
            placeholderTextColor={'#979797'}
            onChangeText={text => setSearchQuery(text)}
          />
          <Image
            source={images.search}
            style={styles.searchIcon}
            tintColor={'#979797'}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={{position: 'absolute', top: hp(5.7), left: wp(78)}}>
            <Image
              source={images.searchsettings}
              style={{
                height: hp(5),
                width: wp(10),
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.specialistText}>Specialist</Text>

        <View>
          <FlatList
            data={filteredData}
            keyExtractor={item => {
              item.id;
            }}
            renderItem={({item}) => {
              return (
                <DoctorCard
                  imagee={item?.imagee}
                  name={item?.name}
                  specialist={item?.specialist}
                  onPress={() => {
                    navigate('DoctorProfile', {
                      doctorName: item.name,
                      doctorSpecialist: item.specialist,
                    });
                  }}
                />
              );
            }}
          />
        </View>
      </ScrollView>
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
  select: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(18),
    color: 'black',
    marginLeft: wp(23),
  },
  selectIcon: {
    height: hp(2),
    width: wp(2),
    position: 'absolute',
    left: wp(42),
    top: hp(0.5),
  },
  searchInput: {
    backgroundColor: 'white',
    width: wp(90),
    marginTop: hp(5),
    height: hp(6.5),
    borderRadius: wp(2),
    fontSize: RFValue(16),
    paddingLeft: wp(12),
    borderRadius: wp(2),
  },
  searchIcon: {
    height: hp(2.5),
    width: wp(5),
    position: 'absolute',
    left: wp(3),
    top: hp(7),
  },
  specialistText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'black',
    width: wp(90),
    marginTop: hp(3),
  },
});

export default Doctor;
