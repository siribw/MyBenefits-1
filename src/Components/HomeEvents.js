import {
    Box,
    FlatList,
    Flex,
    Heading,
    Image,
    Pressable,
    ScrollView,
    Text,
    Header,
    View
  } from "native-base";
  import React from "react";
  import events from "../data/Events";
  import Colors from "../color";
  import Rating from "./Rating";
  import { useNavigation } from "@react-navigation/native";
  import Globalstyles from '../Globalstyle';
  
  function HomeEvents() {
    const navigation = useNavigation();
    return(
    <View>
      <Text style={Globalstyles.header2}>Upcoming events</Text>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        
  <Flex
          flexWrap="wrap"
          direction="row"
          justifyContent="space-between"
          px={6}
        >
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
      </View>
    )
  }
  
  export default HomeEvents;
  