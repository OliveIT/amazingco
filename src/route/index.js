import React from "react";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import Splash from "../containers/unsecure/splash";
import Experience from "../containers/unsecure/experience";
import Weather from "../containers/unsecure/weather";
import Stops from "../containers/unsecure/stops";
import Crackcode from "../containers/unsecure/crackcode";
import Easierclue from "../containers/unsecure/easierclue";
import Offer from "../containers/unsecure/offer";

export const INITIAL_ROUTE = 'unsecured';
export const INITIAL_SECURED_ROUTE = 'home';
export const INITIAL_UNSECURED_ROUTE = 'splash';


const unsecuredRoutes = {
  splash: {
    screen: Splash
  },
  experience: {
    screen: Experience
  },
  weather: {
    screen: Weather
  },
  stops: {
    screen: Stops
  },
  crackcode: {
    screen: Crackcode
  },
  easierclue: {
    screen: Easierclue
  },
  offer: {
    screen: Offer
  }
}

const Routes = {
  unsecured: {
      screen: createStackNavigator(unsecuredRoutes, {
          initialRouteName: INITIAL_UNSECURED_ROUTE,
          headerMode: 'none',
      })
  },
  
//  secured: {
//  }
};

const mainNavigator = createStackNavigator(Routes, {
  initialRouteName: INITIAL_ROUTE,
  headerMode: 'none',
});




export default createAppContainer(mainNavigator);