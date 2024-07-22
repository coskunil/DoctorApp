import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {FONTS} from '../../constants';
import {RFValue, wp, hp} from '../responsive';

const CustomButton = ({
  buttonText,
  imageName,
  onPress,
  justify = 'center',
  position = 'relative',
  margin = wp(1),
  textSize = RFValue(19),
  textColor = 'white',
  width = wp(85),
  marginL = 0,
  backgroundColor = 'transparent',
  marginR = 0,
  marginT = 0,
  marginB = 0,
  bottom = 3,
  height = hp(8),
  alignSelf = 'center',
  zIndex = 1000,
  disabled = false,
  opacity = 1,
  loading = false,
  transparent = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        marginLeft: marginL,
        marginRight: marginR,
        marginTop: marginT,
        marginBottom: marginB,
      }}
      onPress={onPress}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        colors={
          !transparent ? ['#3D75E9', '#0082C8'] : ['transparent', 'transparent']
        }
        style={[
          styles.button,
          {
            opacity,
            zIndex,
            alignSelf,
            width,
            height,
            backgroundColor,
            justifyContent: justify,
            position,
            bottom,
          },
        ]}>
        {loading ? (
          <ActivityIndicator
            style={{alignSelf: 'center', flex: 1}}
            size="small"
            color="#fff"
          />
        ) : (
          <>
            <Text
              style={[
                styles.buttonText,
                {
                  marginTop: hp(0),
                  marginLeft: margin,
                  color: textColor,
                  fontSize: 10,
                },
              ]}>
              {buttonText}
            </Text>
            {imageName && (
              <Image
                resizeMode="contain"
                source={imageName}
                style={{
                  width: wp(8),
                  height: wp(8),
                }}
              />
            )}
          </>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    right: wp(3),
  },
  buttonText: {
    color: 'black',
    fontFamily: FONTS.bold,
  },
});

export default CustomButton;
