import { Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

//Height of Text Card set to height of viewport - height of margin

function TextCard({ title, subtitle, paragraph, id }) {
  return (
    <Flex
      h="calc(100vh - 110px)"
      direction="column"
      id={id}
      width="55%"
      minWidth={"900px"}
    >
      <Text fontSize="120" fontWeight="700" lineHeight={"1"}>
        {title}
      </Text>
      <Text fontSize="120" fontWeight="600" lineHeight={"1"}>
        {subtitle}
      </Text>
      <Text fontSize="24" mt="80px" textAlign={"justify"}>
        {paragraph}
      </Text>
    </Flex>
  );
}

export default TextCard;

// m="clamp(50px, 5vh, 5vh)"
// mb="clamp(25px, 2.5vh, 2.5vh)"
