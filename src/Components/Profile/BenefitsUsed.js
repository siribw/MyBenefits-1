import { Box, Button, HStack, ScrollView, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../../color";

//liste over anvendte fordele (fiktivt)

const BenefitsUsed = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Zalando Coupon */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              Zalando order 35672859
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Dec 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              Saved: $45
            </Button>
          </HStack>
        </Pressable>
        {/*SATS Membership */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              SATS Membership 72859
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Aug 18 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              Saved: $5,5
            </Button>
          </HStack>
        </Pressable>
        {/* Fredagsbar*/}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              Jule-Fredagsbar
            </Text>
            <Text fontSize={14} italic color={Colors.black} isTruncated>
              Dec 2 2022
            </Text>
            
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default BenefitsUsed;
