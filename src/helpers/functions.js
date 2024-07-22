import appConfig from "../config/appConfig";
import Lang from "../language";
import store from "../store/store";

const FUNCTIONS = {
    checkLanguage: async () => {
        try {
            const existLang = ["tr", "en", "de", "es", "fr", "hi", "id", "it", "pt"];
            if (store.appLang) {
                Lang.setLanguage(store.appLang);
            } else {
                const globalLanguage = existLang.includes(appConfig.defaultLanguage)
                    ? appConfig.defaultLanguage
                    : "en";
                store.update("appLang", globalLanguage), Lang.setLanguage(globalLanguage);
            }
        } catch (error) {
            console.log("getAppLanguage Error: ", error);
        }
    }
}

export default FUNCTIONS;