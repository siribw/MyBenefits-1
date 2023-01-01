import React from "react";
import { Center, Text } from "native-base";

//Message bruges til kommentarer på cuopons, der bliver dannet ud fra nedenstående komponent

export default function Message({ bg, color, children, size, bold }) {
  return (
    <Center bg={bg} p={4} rounded={5}>
      <Text color={color} fontSize={size} bold={bold}>
        {children}
      </Text>
    </Center>
  );
}
