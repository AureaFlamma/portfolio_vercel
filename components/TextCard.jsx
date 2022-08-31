import { Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

function TextCard({ title, subtitle, paragraph, id }) {
  return (
    <Flex h="90vh" direction="column" id={id}>
      <Text fontSize="120" fontWeight="700" lineHeight={"1"}>
        {title}
      </Text>
      <Text fontSize="120" fontWeight="600" lineHeight={"1"}>
        {subtitle}
      </Text>
      <Text fontSize="30" mt="4em" w="80%" textAlign={"justify"}>
        {paragraph}
      </Text>
    </Flex>
  );
}

export default TextCard;

// m="clamp(50px, 5vh, 5vh)"
// mb="clamp(25px, 2.5vh, 2.5vh)"
