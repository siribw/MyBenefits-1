import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from "../color";
import ProfileScreen from "../Screens/ProfileScreen";
import MapsScreen from '../Screens/MapsScreen'
import AdminScreen from '../Screens/AdminScreen'

import StackNav from "./StackNav";
//nedenstående er vores bottom navigator knapper
const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'home-outline'}
                    size={size}
                    color={color}
                    />
          ),
        }}
      />
      
      {/* maps */}
      <Tab.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'md-map-outline'}
                    size={size}
                    color={color}
                    />
          ),
        }}
      />
      {/* profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'md-person-outline'}
                    size={size}
                    color={color}
                    />
          ),
        }}
      />
      {/* admin */}
      <Tab.Screen
        name="Admin"
        component={AdminScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'pie-chart-sharp'
            }
                    size={size}
                    color={color}
                    />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
  },
});

//eksporterer komponent
export default BottomNav;
