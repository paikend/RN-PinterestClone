
import React from 'react';
import AppNavigator from "./src/navigation/navigation";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers/index';

const store = createStore(reducers)
const App = () => {
  console.disableYellowBox = true
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
};

export default App;