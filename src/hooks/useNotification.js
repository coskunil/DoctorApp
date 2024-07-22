import OneSignal from 'react-native-onesignal';
import { ONESIGNAL_ID } from '@env';
import appConfig from '../config/appConfig';

const OneSignalInit = async () => {
  OneSignal.setAppId(appConfig.ONESIGNAL_APP_ID);
};

const OneSignalPrompt = async () => {
  OneSignal.promptForPushNotificationsWithUserResponse();
};

const OneSignalDeviceInfo = async () => {
  const deviceState = await OneSignal.getDeviceState();
  return deviceState;
};

export {
  OneSignalInit,
  OneSignalPrompt,
  OneSignalDeviceInfo,
};