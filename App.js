import React from 'react';
import StackNavigation from './src/navigation';
import {observer} from 'mobx-react-lite';
import {OneSignalInit} from './src/hooks/useNotification';
import Purchase from './src/helpers/Purchase';

async function init() {
  await Purchase.init();
  await Purchase.getPackages();
  OneSignalInit();
}

const App = observer(() => {
  init();
  return <StackNavigation />;
});

export default App;
