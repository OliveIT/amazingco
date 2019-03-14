/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import * as React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigation from "./route";
//import Splash from "./containers/unsecure/splash";

const App = () => 
  <Provider store={store}>
    <Navigation />
  </Provider>;

export default App;