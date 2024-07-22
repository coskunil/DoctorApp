import Purchases from "react-native-purchases";
import  OneSignal  from "react-native-onesignal";
import { Alert, Platform } from "react-native";
import appConfig from "../config/appConfig";
import store from "../store/store";

const Purchase = {
  check: async () => {
    try {
      const { entitlements } = await Purchases.getCustomerInfo();
      const isPremium = typeof entitlements.active["pro"] !== "undefined";
      Purchase.update(isPremium);
      return isPremium;
    } catch (error) {
      Alert.alert(appConfig.applicationName, error.message);
      return false;
    }
  },
  init: async () => {
    try {
      const deviceId = await appConfig.uniqueDeviceID;
      Purchases.configure({
        apiKey:
          Platform.OS === "android"
            ? appConfig.RevenueCat_API_Google
            : appConfig.RevenueCat_API_APPLE,
        appUserID: deviceId,
      });
    } catch (error) {
      console.log("init Error:", error);
    }
  },
  getPackages: async () => {
    try {
      await Purchase.init();
      const { current } = await Purchases.getOfferings();
      const { availablePackages } = current;
      const selectedPremiumPackage = availablePackages[2];
      store.update("selectedPremium", selectedPremiumPackage);
      store.update("availablePackages", availablePackages);

      return availablePackages;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (premiumValue) => {
    const premiumTagValue = premiumValue ? "true" : "";
		OneSignal.sendTag("premium", premiumTagValue);
    store.update("isPremium", premiumValue);
  },

  makePurchase: async (product) => {
    try {
      const { customerInfo } = await Purchases.purchasePackage(product);
      const { entitlements } = customerInfo;
      const isPremium = typeof entitlements.active["pro"] !== "undefined";

      if (isPremium) {
        Purchase.update(true);
        return customerInfo;
      } else {
        Purchase.update(false);
        return false;
      }
    } catch (error) {
      Alert.alert(appConfig.applicationName, error.message);
      return false;
    }
  },
};

export default Purchase;
