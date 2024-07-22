import LocalizedStrings from 'react-native-localization';

const languages = {
  tr: require('./languages/tr.json'),
  de: require('./languages/de.json'),
  en: require('./languages/en.json'),
  es: require('./languages/es.json'),
  fr: require('./languages/fr.json'),
  it: require('./languages/it.json'),
  pt: require('./languages/pt.json'),
  id: require('./languages/id.json'),
};

const Lang = new LocalizedStrings(languages);
export default Lang;
