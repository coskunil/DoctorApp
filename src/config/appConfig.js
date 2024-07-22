import DeviceInfo from "react-native-device-info";
import * as RNLocalize from "react-native-localize";
import OneSignal from "react-native-onesignal";

const getApplicationName = () => DeviceInfo.getApplicationName();

const getUniqueDeviceID = async () => {
  return await DeviceInfo.getUniqueId();
};

const getOneSignalUserID = async () => {
  const deviceState = await OneSignal.getDeviceState();
  return deviceState.userId;
};
const userAgentWebview =
  "Mozilla/5.0 (Linux; Android 12; SM-G955N Build/NRD90M.G955NKSU1AQDC; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36";
const getDeviceSeries = () => DeviceInfo.getDeviceId();
const getDeviceOS = () => DeviceInfo.getSystemName();
const getAppId = () => "15955959242";
const getDeviceBrand = () => DeviceInfo.getBrand();
const getDefaultLanguage = () => RNLocalize.getLocales()[0].languageCode;
const getDeviceId = () => DeviceInfo.getDeviceId();


const appConfig = {
  applicationName: getApplicationName(),
  uniqueDeviceID: getUniqueDeviceID(),
  oneSignalUserID: getOneSignalUserID(),
  userAgentWebview,
  deviceSeries: getDeviceSeries(),
  deviceOS: getDeviceOS(),
  appId: getAppId(),
  deviceBrand: getDeviceBrand(),
  defaultLanguage: getDefaultLanguage(),
  deviceId: getDeviceId(),
  generateKey: "de6f66a4c5e2c819f76b4a93dc49e2ec723aff2d6fd500bd0a39768b8bafb2a8",
  RevenueCat_API_Google: "goog_ESntOdjXkGXkmclulhULyQkHZAF",
  RevenueCat_API_APPLE: "appl_IfJVGtefXTzhyHCKLrDNxBbQmbw",
  ONESIGNAL_APP_ID: "e650519a-8d1d-4e49-a237-9e5a16bd1aff",
  ENTITLEMENT_ID: "pro",
};



export default appConfig;
