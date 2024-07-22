import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, makeAutoObservable} from 'mobx';

import {
  makePersistable,
  clearPersistedStore,
  configurePersistable,
  getPersistedStore,
  stopPersisting,
} from 'mobx-persist-store';
import {TextInput} from 'react-native-gesture-handler';

configurePersistable(
  {
    storage: AsyncStorage,
    expireIn: 86400000,
    removeOnExpiration: false,
    stringify: true,
    debugMode: false,
  },
  {delay: 100, fireImmediately: false},
);
class Store {
  completePersistLoading = false;
  introDone = false;
  userData = [];
  DoctorModal = false;

  // deleteData = async () => {
  //   this.userData = []; // userData özelliğini temizle
  // };

  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
    makePersistable(this, {
      name: 'Store',
      properties: ['isPremium', 'introDone', 'userData', 'DoctorModal'],
      storage: AsyncStorage,
    });
    setTimeout(
      action(() => {
        this.completePersistLoading = true;
      }),
      1000,
    );
  }

  // Persist Functions dont touch
  async clearStoredDate() {
    await clearPersistedStore(this);
  }

  async getStoredData() {
    return getPersistedStore(this);
  }

  async stopStore() {
    stopPersisting(this);
  }

  update = async (key, data) => {
    this[key] = data;
  };

  updateChild = async (key, child, data) => {
    this[key][child] = data;
  };
}

const store = new Store();
export default store;
