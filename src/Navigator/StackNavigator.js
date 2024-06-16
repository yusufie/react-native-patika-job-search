import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../pages/Detail';
import TabNavigator from './TabNavigator';
import Jobs from '../pages/Jobs';
import Favorited from '../pages/Favorited';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Favorited" component={Favorited} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
