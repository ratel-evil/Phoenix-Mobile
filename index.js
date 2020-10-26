/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
import { setGlobalStyles } from 'react-native-floating-label-input';
 
setGlobalStyles.containerStyles = {
  backgroundColor: '#efefef',
  // any styles you want to generalize to your input container
};
setGlobalStyles.labelStyles = {
  color: '#000',
  // any styles you want to generalize to your floating label
};
setGlobalStyles.inputStyles = {
  color: 'grey',
  // any styles you want to generalize to your input
};
setGlobalStyles.containerStyles = {
    borderColor:'grey'
}