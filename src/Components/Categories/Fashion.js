import {
    Box,
    FlatList,
    Flex,
    Heading,
    Image,
    Pressable,
    ScrollView,
    Text,
  } from "native-base";
  import React from "react";
  import coupons from "../../data/Coupons";
  import Colors from "../../color";
  import Rating from "../Rating";
  import { useNavigation } from "@react-navigation/native";
  import ButtomNav from '../../Navigations/BottomNav'
  import Globalstyles from '../../Globalstyle'
  
//viser alle rabatkouponer, der har kategorien Fashion

  function FashionCoupons() {
    const navigation = useNavigation();       
    let couponsArr = coupons.filter(coupon => coupon.category === 1)

    return(
      
      <ScrollView flex={1} showsVerticalScrollIndicator={false} style={Globalstyles.container2}>
          <Image source = {require('../../../assets/contrastlogo.png')}   
                    h = {200}
                    w = {"full"}
                    alt = 'none'
          />
        <Text style={Globalstyles.text2}>My coupons</Text>
  <Flex
          flexWrap="wrap"
          direction="row"
          justifyContent="space-between"
          px={6}
        >
            
          {couponsArr.map((coupon) => (

            <Pressable
              onPress={() => navigation.navigate("SingleCoupon", coupon)}
              key={coupon._id}
              w="47%"
              bg={Colors.white}
              rounded="md"
              shadow={2}
              pt={0.3}
              my={3}
              pb={2}
              overflow="hidden"
              
            >
              <Box px={4} pt={1}>
                <Image
              source={{ uri: coupon.image }}
              alt={coupon.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Text fontSize={10} mt={1} isTruncated w="full">
                  {coupon.name}
                </Text>
                
              </Box>
            </Pressable>
          ))}
        </Flex>
        
      </ScrollView>    )
    
  }
  
  export default FashionCoupons;
  