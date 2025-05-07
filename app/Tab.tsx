import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ModelScreen from './Model';  // Importation de ModelScreen
import DevisScreen from './Devis';  // Importation de DevisScreen
import UserScreen from './Favoris';  // Importation de UserScreen

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Model"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Model') {
              iconName = focused ? 'ios-construct' : 'ios-construct-outline';
            } else if (route.name === 'Devis') {
              iconName = focused ? 'ios-paper' : 'ios-paper-outline';
            } else if (route.name === 'User') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Model" component={ModelScreen} />
        <Tab.Screen name="Devis" component={DevisScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
