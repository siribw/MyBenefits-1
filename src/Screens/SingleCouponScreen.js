import {
  Box,
  Heading,
  Image,
  ScrollView,
  HStack,
  Spacer,
  Text,
  Button
} from "native-base";
import { View, Alert } from "react-native";
import React, { useEffect, useState,  } from "react";
import Colors from "../color";
import Rating from "../Components/Rating";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";
import Globalstyles from "../Globalstyle";



//generate random coupon
//inspo fra https://www.programiz.com/javascript/examples/generate-random-strings 
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function functionOne(){
  // do something
};
  


function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
} return result};

function functionCombined() {
  functionOne();
  Alert.alert(generateString(7));
};

  function SingleCouponScreen({ route }) {
    const [value, setValue] = useState(0);
    const navigation = useNavigation();
    const coupon = route.params;
  
 
  return (
    
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: coupon.image }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {coupon.name}
        </Heading>
        <Rating value={coupon.rating} text={`${coupon.numReviews} review`} />
        <HStack space={2} alignItems="center" my={5}>
        
          

        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {coupon.description}
        </Text>
        <Button 
          onPress={() => functionCombined()}
          style ={Globalstyles.button}
      
        >
          Get discount code!
        </Button>
        {/* REVIEW */}
        <Review />
      </ScrollView>
    </Box>
  
  );
}

export default SingleCouponScreen;
