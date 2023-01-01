import { Box, FormControl, Input, ScrollView, VStack, Button } from "native-base";
import React from "react";
import Colors from "../../color";


//her muliggør vi at man kan ændre sin adgangskode. Ikke adgang til DB, kun authentication i Firebase

const Inputs = [
  {
    label: "USERNAME",
    type: "text",
  },
  {
    label: "EMAIL",
    type: "text",
  },
  {
    label: "NEW PASSWORD",
    type: "password",
  },
  {
    label: "CONFIRM PASSWORD",
    type: "password",
  },
];

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <VStack space={10} mt={5} pb={10}>
          {/*FormControl er native base løsning for at håndtere udfyldning af formulare korrekt / psw og emails */}
          {/*Inputs hentes fra øverste hardcodede array, som representerer de felter der skal vises på profilen */}
          {Inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input
                borderWidth={0.2}
                bg={Colors.subGreen}
                borderColor={Colors.main}
                py={4}
                type={i.type}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <Button bg={Colors.main} color={Colors.white}>
            UPDATE PROFILE
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

//eksporterer komponent
export default Profile;
