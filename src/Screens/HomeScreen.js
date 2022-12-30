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
      <Flex direction="row" h = '40'mb="2.5" mt="1.5" flex="1" flexWrap= 'wrap'>
        <Pressable style={ {
        
          backgroundColor: "#7e5ffa",
          borderWidth: 0,
          borderRadius: 10,
          padding: 10,
          margin: 2}} title = 'Fashion'  onPress={() => navigation.navigate("Fashion")}><Text style={Globalstyles.text2}>
      
          Fashion</Text></Pressable>
     
        <Pressable style={ {
 
          backgroundColor: "#fc3542",
          borderWidth: 0,
          borderRadius: 10,
          padding: 10,
          margin: 2}} title = 'Health'  onPress={() => navigation.navigate("Health")} ><Text style={Globalstyles.text2}>
        
          Health</Text></Pressable>

        <Pressable style={ {
       
          backgroundColor: "#7ff564",
          borderWidth: 0,
          borderRadius: 10,
          padding: 10,
          margin: 2}} title = 'Food & Drinks'  onPress={() => navigation.navigate("FoodDrinks")} ><Text style={Globalstyles.text2}>
         
          Food & Drinks</Text></Pressable>
     
        <Pressable style={ {
        
          backgroundColor: "#6db2f7",
          borderWidth: 0,
          borderRadius: 10,
          padding: 10,
          margin: 2}} title = 'Insurance'  onPress={() => navigation.navigate("Insurance")} ><Text style={Globalstyles.text2}>
        
          Insurance</Text></Pressable>

        <Pressable style={ {
          
          backgroundColor: "#f5e069",
          borderWidth: 0,
          borderRadius: 10,
          padding: 10,
          margin: 2}} title = 'Events'  onPress={() => navigation.navigate("HomeEvents")} ><Text style={Globalstyles.text2}>

          Events</Text></Pressable>

          </Flex> 
      
   
    </ScrollView>
    
  )
  
}

export default HomeScreen;
