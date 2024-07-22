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
} from 'react-native';
import {height, hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const ForgotPassword = observer(({navigation: {navigate, goBack}}) => {
  const [forgotIndex, setForgotIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const CELL_COUNT = 5;
  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />

      {forgotIndex === 0 ? (
        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: wp(90)}}>
            <TouchableOpacity
              onPress={() => {
                navigate('SignIn');
              }}>
              <Image
                source={images.back}
                style={{height: hp(6), width: wp(12)}}
              />
            </TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password</Text>
          </View>
          <Text style={styles.weneedText}>
            We need your registration phon number to send you password reset
            code!
          </Text>

          <View
            style={{
              marginTop: hp(10),
            }}>
            <TextInput
              style={styles.gmailInput}
              placeholder="xxx@gmail.com"
              placeholderTextColor={'black'}
            />

            <TouchableOpacity
              onPress={() => {
                setForgotIndex(forgotIndex + 1);
              }}>
              <Text style={styles.sendcodeText}>Send Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : forgotIndex === 1 ? (
        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: wp(90)}}>
            <TouchableOpacity
              onPress={() => {
                setForgotIndex(forgotIndex - 1);
              }}>
              <Image
                source={images.back}
                style={{height: hp(6), width: wp(12)}}
              />
            </TouchableOpacity>
            <Text style={styles.verification}>Verification Code</Text>
          </View>
          <Text style={styles.enterText}>Enter the code we sent you</Text>
          <View style={{marginTop: hp(10)}}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}>
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </View>

          <Text style={styles.resent}>Resent Code</Text>
          <TouchableOpacity
            onPress={() => {
              setForgotIndex(forgotIndex + 1);
            }}
            style={{marginTop: hp(2.5)}}>
            <Text style={styles.confirm}>Confirm</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: wp(90)}}>
            <TouchableOpacity
              onPress={() => {
                setForgotIndex(forgotIndex - 1);
              }}>
              <Image
                source={images.back}
                style={{height: hp(6), width: wp(12)}}
              />
            </TouchableOpacity>
            <Text style={styles.resetText}>Reset Password</Text>
          </View>
          <Text style={styles.enterPassword}>Enter a new password</Text>
          <View style={{marginTop: hp(10)}}>
            <Image
              source={images.eye}
              style={styles.oneEye}
              resizeMode="contain"
            />
            <Image
              source={images.eye}
              style={styles.twoEye}
              resizeMode="contain"
            />
            <TextInput
              style={styles.passwordTextInput}
              placeholder="New Password"
              placeholderTextColor={'black'}
            />
            <TextInput
              style={styles.passwordTextInput}
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigate('SignIn');
            }}>
            <Text style={styles.passConfirm}>Confirm</Text>
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
    paddingTop: StatusBar.currentHeight * 2,
    backgroundColor: '#F9F9F9',
  },

  cell: {
    marginTop: hp(3.5),
    width: wp(13.5),
    height: hp(7),
    textAlign: 'center',
    margin: wp(2),
    paddingLeft: wp(4.5),
    backgroundColor: 'white',
    borderRadius: wp(2),
    paddingTop: hp(1),
  },
  cellText: {
    color: '#000',
    fontSize: RFValue(26),
    fontFamily: FONTS.medium,
  },
  focusCell: {
    borderColor: '#000',
  },
  forgotText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(18),
    color: 'black',
    marginLeft: wp(14),
  },
  weneedText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(16),
    color: 'black',
    width: wp(90),
    marginTop: hp(3.5),
  },
  gmailInput: {
    backgroundColor: 'white',
    width: wp(90),
    marginTop: hp(1.5),
    height: hp(6.5),
    borderRadius: wp(2),
    fontSize: RFValue(16),
    paddingLeft: wp(4),
  },
  sendcodeText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'white',
    marginTop: hp(2.5),
    backgroundColor: '#18A0FB',
    width: wp(90),
    textAlign: 'center',
    height: hp(7.2),
    paddingTop: hp(2),
    borderRadius: wp(3),
  },
  verification: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(18),
    color: 'black',
    marginLeft: wp(14),
  },
  enterText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(16),
    color: 'black',
    width: wp(90),
    marginTop: hp(2.5),
  },
  resent: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: '#18A0FB',
    marginLeft: wp(60),
  },
  confirm: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'white',
    marginTop: hp(10),
    backgroundColor: '#18A0FB',
    width: wp(90),
    textAlign: 'center',
    height: hp(7),
    paddingTop: hp(2),
    borderRadius: wp(3),
  },
  resetText: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(18),
    color: 'black',
    marginLeft: wp(14),
  },
  enterPassword: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(16),
    color: 'black',
    width: wp(90),
    marginTop: hp(2.5),
  },
  oneEye: {
    height: hp(1.7),
    width: wp(3.4),
    position: 'absolute',
    zIndex: 1,
    top: hp(15),
    left: wp(83),
  },
  twoEye: {
    height: hp(1.7),
    width: wp(3.4),
    position: 'absolute',
    zIndex: 1,
    top: hp(6),
    left: wp(83),
  },
  passwordTextInput: {
    backgroundColor: 'white',
    width: wp(90),
    marginTop: hp(3.5),
    height: hp(6.5),
    borderRadius: wp(2),
    fontSize: RFValue(16),
    paddingLeft: wp(4),
  },
  passConfirm: {
    fontFamily: FONTS.medium,
    fontSize: RFValue(15),
    color: 'white',
    marginTop: hp(7.5),
    backgroundColor: '#18A0FB',
    width: wp(90),
    textAlign: 'center',
    height: hp(7),
    paddingTop: hp(2),
    borderRadius: wp(3),
  },
});

export default ForgotPassword;
