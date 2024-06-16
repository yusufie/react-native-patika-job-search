import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorited from '../pages/Favorited';
import Jobs from '../pages/Jobs';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{
          headerTintColor: 'tomato',
        }}
      />
      <Tab.Screen
        name="Favorited"
        component={Favorited}
        options={{headerTintColor: 'tomato'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
