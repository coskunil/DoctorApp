import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Splash,
  Detail,
  Intro,
  Main,
  Settings,
  SignIn,
  ForgotPassword,
  DoctorProfile,
  Payment,
} from '../screens';
import {observer} from 'mobx-react-lite';
import {NavigationContainer} from '@react-navigation/native';
import store from '../store/store';
import Tabs from './tab';
import DoctorModal from '../components/Modal/DoctorModal';

const AppStack = createNativeStackNavigator();

const SCREENS = [
  {name: 'Splash', component: Splash},
  {name: 'SignIn', component: SignIn},
  {name: 'DoctorProfile', component: DoctorProfile},
  {name: 'ForgotPassword', component: ForgotPassword},
  {name: 'Payment', component: Payment},
  {name: 'Main', component: Tabs},
  {name: 'Doctor', component: Tabs},
  {name: 'Notification', component: Tabs},
];

const openModal = name => store[name] === true;

const StackNavigation = observer(() => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          animation: 'slide_from_right',
          gestureEnabled: false,
          gestureDirection: 'vertical',
          headerShown: false,
        }}>
        {SCREENS.map(screen => (
          <AppStack.Screen
            key={screen.name}
            options={{
              animation: 'slide_from_right',
              gestureEnabled: false,
              gestureDirection: 'vertical',
              headerShown: false,
            }}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </AppStack.Navigator>
      {openModal('DoctorModal') && <DoctorModal />}

      {/* 		
			Örnek modal Importu Aşağıda ki gibidir
			{openModal("storyActive") && <Stories />} */}
    </NavigationContainer>
  );
});

export default StackNavigation;
