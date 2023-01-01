import {
    Box,
    Flex,
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
  


function FashionCoupons() {

  //navigation sørger for at vi kan navigere til siden ved tryk af en knap på Home siden
  const navigation = useNavigation();   

  //viser alle rabatkouponer, der har kategorien Fashion
  let couponsArr = coupons.filter(coupon => coupon.category === 1)

  return(
      
    <ScrollView flex={1} showsVerticalScrollIndicator={false} style={Globalstyles.container2}>
      {/*Logo */}
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

      {/* .map løber igennem data i vores array vi har filtreret CouponsArr og returnerer data */}
      {/* coupon fremviser vi som pressables så man kan gå direkte ind på den enkelte rabat ved at trykke på den */}   
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

        {/* under hentes billedet fra data og dets titel der presenteres i en Box */}
        {/* Box er fra Native Base og er en komponent som gør det nemt at vise noget data på en pæn måde i en box */}
        {/* vi gør denne box til en pressable box med et billede og en titel */}

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
    </ScrollView>    
  )
}

//eksporterer komponent
export default FashionCoupons;