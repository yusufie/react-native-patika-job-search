import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './Navigator/StackNavigator';

const Router = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Router;
