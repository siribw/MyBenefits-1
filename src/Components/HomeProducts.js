import {
  Box,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  View
} from "native-base";
import React from "react";
import coupons from "../data/Coupons";
import Colors from "../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";
import Globalstyles from "../Globalstyle";

//viser en liste af coupons på Home siden 

function HomeCoupons() {
  const navigation = useNavigation();
  
  return(
    <View>
      {/* header */}
      <Text style={Globalstyles.header2}>My coupons</Text>
      {/* vi sætter horizontal=true for at få view til at scrolle vandret istedet for vertikalt */}
      <ScrollView flex={1} horizontal={true} centerContent={true}>
      
        {/* returnerer et array af coupons der stilles op som pressables boxes, med billede og titel */}
        {/*når man klikker på dem bliver man vist til rabattens egen side hvor man kan hente en kode */}
        {coupons.map((coupon) => (
          <Pressable
            onPress={() => navigation.navigate("SingleCoupon", coupon)}
            key={coupon._id}
            w="20%"
            bg={Colors.white}
            borderRadius={25}
            shadow={2}
            pt={7}
            my={3}
            pb={2}
            margin={2}
            padding={1.2}

          >
            <Image
              source={{ uri: coupon.image }}
              alt={coupon.name}
              w="full"
              h={24}
              resizeMode="cover"
              
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                {coupon.discount}%
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {coupon.name}
              </Text>
              <Rating value={coupon.rating} />
            </Box>
          </Pressable>
        ))}
      
    </ScrollView>
    </View>
  )
}
//eksporterer komponent
export default HomeCoupons;
