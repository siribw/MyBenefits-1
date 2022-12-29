import { Text, View, Flex, ScrollView } from "native-base";
import React from "react";
import {Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeProducts from "../Components/HomeProducts";
import HomeEvents from "../Components/HomeEvents";
import Fashion from '../Components/Categories/Fashion'
import Health from '../Components/Categories/Health'
import Header from '../Components/Header'
import Globalstyles from '../Globalstyle'
import { useNavigation } from "@react-navigation/native";




function HomeScreen() {
  const navigation = useNavigation();

  return (
  
    <ScrollView style={Globalstyles.container3}>
   
            <Header/>

      <HomeProducts />
      <HomeEvents />

      <Text style={Globalstyles.paragraph}>Categories</Text>
      <ScrollView >
        <Pressable style={Globalstyles.button3} title = 'Fashion'  onPress={() => navigation.navigate("Fashion")}><Text style={Globalstyles.text2}>
        <Ionicons name={'shirt-outline'}
         size={20}
          />
          Fashion</Text></Pressable>
     
        <Pressable style={Globalstyles.button3} title = 'Health'  onPress={() => navigation.navigate("Health")} ><Text style={Globalstyles.text2}>
          <Ionicons name={'medkit-outline'}
         size={20}
          />
          Health</Text></Pressable>

        <Pressable style={Globalstyles.button3} title = 'Food & Drinks'  onPress={() => navigation.navigate("FoodDrinks")} ><Text style={Globalstyles.text2}>
          <Ionicons name={'fast-food-outline'}
         size={20}
          />
          Food & Drinks</Text></Pressable>
     
        <Pressable style={Globalstyles.button3} title = 'Insurance'  onPress={() => navigation.navigate("Insurance")} ><Text style={Globalstyles.text2}>
          <Ionicons name={'help-buoy-outline'}
         size={20}
          />
          Insurance</Text></Pressable>

        <Pressable style={Globalstyles.button3} title = 'Events'  onPress={() => navigation.navigate("HomeEvents")} ><Text style={Globalstyles.text2}>
          <Ionicons name={'today-outline'}
         size={20}
          />
          Events</Text></Pressable>

        </ScrollView>
      
   
    </ScrollView>
    
  )
  
}

export default HomeScreen;
