import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import SingleCouponScreen from "../Screens/SingleCouponScreen";
import SingleEventScreen from "../Screens/SingleEventScreen";
import Fashion from '../Components/Categories/Fashion'
import Health from '../Components/Categories/Health'
import FoodDrinks from '../Components/Categories/FoodDrinks'
import Insurance from '../Components/Categories/Insurance'
import HomeEvents from "../Components/HomeEvents";
import Eventssite from "../Components/Categories/eventsite";

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Stack screen bruger vi til at kunne swipe mellem siderne */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeEvents" component={HomeEvents} />
      <Stack.Screen name="SingleCoupon" component={SingleCouponScreen} />
      <Stack.Screen name="SingleEvent" component={SingleEventScreen} />
      <Stack.Screen name="Fashion" component={Fashion} />
      <Stack.Screen name="Health" component={Health} />
      <Stack.Screen name="FoodDrinks" component={FoodDrinks} />
      <Stack.Screen name="Insurance" component={Insurance} />
      <Stack.Screen name="Eventssite" component={Eventssite} />

    </Stack.Navigator>
  );
};

export default StackNav;
