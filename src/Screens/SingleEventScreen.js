import {
    Box,
    Heading,
    Image,
    ScrollView,
    HStack,
    View,
    Spacer,
    Text,
    Button
  } from "native-base";
  import React, { useState } from "react";
  import Colors from "../color";
  import Rating from "../Components/Rating";
  import NumericInput from "react-native-numeric-input";
  import Review from "../Components/Review";
  import { useNavigation } from "@react-navigation/native";
  
  function SingleEventScreen({ route }) {
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
            onPress={()=> alert('You have been successfully registered')}
            bg={Colors.main}
            color={Colors.white}
            mt={10}
          >
            Register for event
          </Button>
          {/* REVIEW */}
          <Review />
        </ScrollView>
      </Box>
    );
  }
  
  export default SingleEventScreen;
  