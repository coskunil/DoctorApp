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
  FlatList,
} from 'react-native';
import {height, hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import store from '../../store/store';
import {set} from 'mobx';

const SignIn = observer(({navigation: {navigate, goBack}}) => {
  const [signIndex, setSignIndex] = useState(0);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    password: '',
    email: '',
  });

  const data = [
    {
      id: 1,
      imagee: images.pediatric,
    },
    {
      id: 2,
      imagee: images.urology,
    },
    {
      id: 3,
      imagee: images.infectious,
    },
    {
      id: 4,
      imagee: images.internal,
    },
    {
      id: 5,
      imagee: images.cardiology,
    },
    {
      id: 6,
      imagee: images.obs,
    },
    {
      id: 7,
      imagee: images.ent,
    },
    {
      id: 8,
      imagee: images.dermatology,
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
      <ScrollView>
        {signIndex === 0 ? (
          <View>
            <View style={styles.oneSignOneView}>
              <TouchableOpacity>
                <Image
                  source={images.back}
                  style={{height: hp(6), width: wp(12)}}
                />
              </TouchableOpacity>
              <Text style={styles.oneLets}>Let's Sign In</Text>
            </View>
            <Text style={styles.oneWelcome}>Welcome!</Text>
            <View style={{marginTop: hp(10)}}>
              <Image
                source={images.eye}
                style={styles.oneEye}
                resizeMode="contain"
              />
              <TextInput
                style={styles.oneNameTextInput}
                placeholder={errors.name ? errors.name : 'Name'}
                placeholderTextColor={errors.name ? 'red' : 'black'}
                onChangeText={text => {
                  setName(text);
                }}
                value={name}
              />
              <TextInput
                style={styles.onePasswordTextInput}
                placeholder={errors.password ? errors.password : 'Password'}
                placeholderTextColor={errors.password ? 'red' : 'black'}
                onChangeText={text => {
                  setPassword(text);
                }}
                value={password}
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                navigate('ForgotPassword');
              }}>
              <Text style={styles.forgotText}>Forgot Passsword</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                let valid = true;
                if (!name) {
                  setErrors({...errors, name: 'Name'});
                  valid = false;
                } else {
                  setErrors(prevErrors => ({
                    ...prevErrors,
                    name: '',
                  }));
                }
                if (!password) {
                  setErrors({...errors, password: 'Password'});
                  valid = false;
                } else {
                  setErrors(prevErrors => ({
                    ...prevErrors,
                    password: '',
                  }));
                }
                if (valid) {
                  store.update('userData', {
                    ...store.userData,
                    name: name,
                    password: password,
                  });
                  setSignIndex(signIndex + 2);
                }
              }}>
              <Text style={styles.oneLogin}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.oneDontSign}>
              <Text style={styles.oneDont}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  setSignIndex(signIndex + 1);
                }}>
                <Text style={styles.oneSignin}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : signIndex === 1 ? (
          <View>
            <View style={styles.twoOneView}>
              <TouchableOpacity>
                <Image
                  source={images.back}
                  style={{height: hp(6), width: wp(12)}}
                />
              </TouchableOpacity>
              <Text style={styles.twoLets}>Let's Login In</Text>
            </View>
            <Text style={styles.createText}>Create Account!</Text>
            <View style={{marginTop: hp(5.5)}}>
              <Image
                source={images.eye}
                style={styles.twoEye}
                resizeMode="contain"
              />
              <TextInput
                style={styles.twoNameTextInput}
                placeholder={errors.name ? errors.name : 'Name'}
                placeholderTextColor={errors.name ? 'red' : 'black'}
                onChangeText={text => {
                  setName(text);
                }}
                value={name}
              />

              <TextInput
                style={styles.emailTextInput}
                placeholder={errors.email ? errors.email : 'Email'}
                placeholderTextColor={errors.email ? 'red' : 'black'}
                onChangeText={text => {
                  setEmail(text);
                }}
                value={email}
                secureTextEntry={true}
              />

              <TextInput
                style={styles.twoPasswordTextInput}
                placeholder={errors.password ? errors.password : 'Password'}
                placeholderTextColor={errors.password ? 'red' : 'black'}
                onChangeText={text => {
                  setPassword(text);
                }}
                value={password}
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                let valid = true;
                if (!name) {
                  setErrors({...errors, name: 'Name'});
                  valid = false;
                } else {
                  setErrors(prevErrors => ({
                    ...prevErrors,
                    name: '',
                  }));
                }
                if (!password) {
                  setErrors({...errors, password: 'Password'});
                  valid = false;
                } else {
                  setErrors(prevErrors => ({
                    ...prevErrors,
                    password: '',
                  }));
                }
                if (valid) {
                  store.update('userData', {
                    ...store.userData,
                    name: name,
                    password: password,
                    email: email,
                  });
                  setSignIndex(signIndex + 1);
                }
              }}>
              <Text style={styles.TwoTouchableText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.twoDontView}>
              <Text style={styles.twoDont}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  setSignIndex(0);
                }}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.threeOneView}>
              <TouchableOpacity
                onPress={() => {
                  setSignIndex(0);
                }}>
                <Image
                  source={images.back}
                  style={{height: hp(6), width: wp(12)}}
                />
              </TouchableOpacity>
              <Text style={styles.departments}>Departments / Categories</Text>
            </View>
            <Text style={styles.whatText}>
              What do you want to Consult you like
            </Text>

            <FlatList
              data={data}
              contentContainerStyle={{}}
              style={{flexGrow: 0}}
              numColumns={2}
              vertical
              showsVerticalScrollIndicator={false}
              keyExtractor={item => {
                item.id;
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={{flex: 1, margin: 10}}>
                    <Image
                      source={item.imagee}
                      style={{
                        height: hp(14.5),
                        width: wp(40),
                        marginTop: hp(0.5),
                      }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                );
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigate('Main');
              }}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
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
  oneSignOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
  },
  oneLets: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(18),
    color: 'black',
    marginLeft: wp(20),
  },
  oneWelcome: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(28),
    color: 'black',
    width: wp(90),
    marginTop: hp(6),
  },
  oneEye: {
    height: hp(1.7),
    width: wp(3.4),
    position: 'absolute',
    zIndex: 1,
    top: hp(14.5),
    left: wp(83),
  },
  oneNameTextInput: {
    backgroundColor: 'white',
    width: wp(90),
    marginTop: hp(3),
    height: hp(6.5),
    borderRadius: wp(2),
    fontSize: RFValue(16),
    paddingLeft: wp(4),
  },
  onePasswordTextInput: {
    backgroundColor: 'white',
    width: wp(90),
    marginTop: hp(2.5),
    height: hp(6.5),
    borderRadius: wp(2),
    fontSize: RFValue(16),
    paddingLeft: wp(4),
  },
  forgotText: {
    fontFamily: FONTS.bold,
    fontSize: RFValue(11.5),
    color: '#18A0FB',
    marginTop: hp(1.5),
    marginLeft: wp(60),
  },
  oneLogin: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'white',
    marginTop: hp(10.5),
    backgroundColor: '#18A0FB',
    width: wp(90),
    textAlign: 'center',
    height: hp(7.2),
    paddingTop: hp(2),
    borderRadius: wp(3),
  },
  oneDontSign: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
    alignSelf: 'center',
  },
  oneDont: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(13),
    color: 'black',
    alignSelf: 'center',
  },
  oneSignin: {
    fontFamily: FONTS.bold,
    fontSize: RFValue(13),
    color: '#18A0FB',
    marginLeft: wp(2),
  },
  twoOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
  },
  twoLets: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(18),
    color: 'black',
    marginLeft: wp(18),
  },
  createText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(28),
    color: 'black',
    width: wp(40),
    marginTop: hp(6),
  },
  twoEye: {
    height: hp(1.7),
    width: wp(3.4),
    position: 'absolute',
    zIndex: 1,
    top: hp(23.5),
    left: wp(83),
  },
  twoNameTextInput: {
    backgroundColor: 'white',
    width: wp(90),
    marginTop: hp(3),
    height: hp(6.5),
    borderRadius: wp(2),
    fontSize: RFValue(16),
    paddingLeft: wp(4),
  },
  emailTextInput: {
    backgroundColor: 'white',
    width: wp(90),
    marginTop: hp(2.5),
    height: hp(6.5),
    borderRadius: wp(2),
    fontSize: RFValue(16),
    paddingLeft: wp(4),
  },
  twoPasswordTextInput: {
    backgroundColor: 'white',
    width: wp(90),
    marginTop: hp(2.5),
    height: hp(6.5),
    borderRadius: wp(2),
    fontSize: RFValue(16),
    paddingLeft: wp(4),
  },
  TwoTouchableText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'white',
    marginTop: hp(4.6),
    backgroundColor: '#18A0FB',
    width: wp(90),
    textAlign: 'center',
    height: hp(7.2),
    paddingTop: hp(2),
    borderRadius: wp(3),
  },
  twoDontView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1.5),
    alignSelf: 'center',
  },
  twoDont: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(13),
    color: 'black',
    alignSelf: 'center',
  },
  loginText: {
    fontFamily: FONTS.bold,
    fontSize: RFValue(13),
    color: '#18A0FB',
    marginLeft: wp(2),
  },
  departments: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(16),
    color: 'black',
    marginLeft: wp(2),
  },
  threeOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
  },
  whatText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(24),
    color: 'black',
    width: wp(90),
    marginTop: hp(1),
  },
  continueText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'white',
    marginTop: hp(3.5),
    backgroundColor: '#18A0FB',
    width: wp(90),
    textAlign: 'center',
    height: hp(7.5),
    paddingTop: hp(2),
    borderRadius: wp(3),
  },
});

export default SignIn;
