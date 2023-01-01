import {
  Box,
  Flex,
  Image,
  Pressable,
  ScrollView,
  Text
} from "native-base";
import React from "react";
import events from "../../data/Events";
import Colors from "../../color";
import Rating from "../Rating";
import { useNavigation } from "@react-navigation/native";
import Globalstyles from '../../Globalstyle';
  
  function Eventssite() {
    //navigation sørger for at vi kan navigere til siden ved tryk af en knap på Home siden
    const navigation = useNavigation();
    return(

         
      <ScrollView flex={1} showsVerticalScrollIndicator={false} style={Globalstyles.container3}>
        {/*Logo */}
        <Image source = {require('../../../assets/contrastlogo.png')}   
          h = {200}
          w = {"full"}
          alt = 'none'
        />
      
        <Text style={Globalstyles.header2}>Upcoming events</Text>
        {/*Flex gør at vi kan placere de forskellige elementer side om side og under hinanden som vi ønsker det */}
        <Flex
          flexWrap="wrap"
          direction="row"
          justifyContent="space-between"
          px={6}
        >
          {/* .map løber igennem vores JSON data base Events og returnerer data */}
          {/* events fremviser vi som pressables så man kan gå direkte ind på den enkelte begivenhed ved at trykke på den */}
          

          {events.map((event) => (
           
            <Pressable
              onPress={() => navigation.navigate("SingleEvent", event)}
              key={event._id}
              w="47%"
              bg={Colors.white}
              rounded="md"
              shadow={2}
              pt={0.3}
              my={3}
              pb={2}
            >
              
              <Image
                source={{ uri: event.image }}
                alt={event.name}
                w="full"
                h={24}
                resizeMode="contain"
              />
              
              {/* under hentes billedet fra data og dets titel der presenteres i en Box */}
              {/* Box er fra Native Base og er en komponent som gør det nemt at vise noget data på en pæn måde i en box */}
              {/* vi gør denne box til en pressable box med et billede og en titel */}
              <Box px={4} pt={1}>
                <Text fontSize={10} color = 'black' mt={1} isTruncated w="full">
                  {event.name}
                </Text>
                <Rating value={event.rating} />
              </Box>
            </Pressable>
          ))}
       </Flex>
      </ScrollView>
     
    )
}

//eksporterer komponent
export default Eventssite;
  