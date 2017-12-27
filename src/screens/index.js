import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import NewApp from '../js/App'

import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

export const AppNavigator2 = TabNavigator({
  Login: { screen: Tab1 },
  Main: { screen: Tab2 },
});

export const AppNavigator = StackNavigator({
  Main: { screen: MainScreen },
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
});

const AppWithNavigationState = ({ navigation }) => (
  <AppNavigator navigation={navigation} />
);

export default NewApp;
