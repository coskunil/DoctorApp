import React from 'react';
import {observer} from 'mobx-react-lite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {hp, wp} from '../helpers/responsive';
import {Image, View} from 'react-native';
import {images} from '../constants';
import {Doctor, DoctorProfile, Main, Notification} from '../screens';
const Tab = createBottomTabNavigator();

const BottomTabView = (focused, index) => {
  const style = {
    width: wp(28),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
    height: hp(8.5),
    overflow: 'hidden',
    marginTop: Platform.OS === 'ios' ? hp(3) : 0,
  };
  return style;
};

const TABS = [
  {name: 'Main', component: Doctor, icon: images.tabs1},
  {name: 'Doctor', component: Doctor, icon: images.tabs2},
  {name: 'Notification', component: Notification, icon: images.tabs3},
  {name: 'aa', component: Main, icon: images.tabs4},
];

const Tabs = observer(() => {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        gestureDirection: 'vertical',
        animation: 'slide_from_right',
        tabBarShowLabel: false,
        tabBarStyle: {
          flex: 1,
          height: hp(9),
          width: wp(100),
          borderRadius: wp(5),
          position: 'absolute',
          backgroundColor: 'white',
          opacity: 0.9,
          borderColor: '#ECF0F6',
          borderWidth: 2,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          alignSelf: 'center',
          paddingHorizontal: wp(3),
        },
      }}>
      {TABS.map(screen => (
        <Tab.Screen
          key={screen.name}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={BottomTabView(focused)}>
                {focused && (
                  <Image
                    source={images.tabline}
                    resizeMode="contain"
                    style={{
                      width: wp(28),
                      height: hp(0.35),
                      position: 'absolute',
                      top: -hp(0.05),
                    }}
                  />
                )}
                <Image
                  source={screen.icon}
                  resizeMode="contain"
                  style={{
                    width: wp(6.5),
                    height: wp(6.5),
                    tintColor: focused ? '#18A0FB' : 'black',
                  }}
                />
              </View>
            ),
          }}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
});

export default Tabs;
