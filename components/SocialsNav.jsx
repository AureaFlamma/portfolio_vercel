import React from "react";
import { Link, Icon, Text, Flex, Box } from "@chakra-ui/react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

//The big Flex is offset-top by 80px, which is the height of the top padding of the page
//The icons (and therefore the flex) have a width of 50px. The right padding of the page is 80px, so right-offseting the big Flex by 15px justifies it horizontally.

const SocialsNav3 = () => {
  return (
    <Flex direction={"column"} position="fixed" top="80px" right="15px">
      <Link href="https://github.com/AureaFlamma" isExternal>
        <Icon
          as={FaGithub}
          color="whiteAlpha.800"
          _hover={{
            color: "#FFC21B",
          }}
          w="50px"
          h="50px"
          my="4"
          mt="0"
          borderRadius={"50px"}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/kaminskp/" isExternal>
        <Icon
          as={FaLinkedin}
          color="whiteAlpha.800"
          _hover={{
            color: "#FFC21B",
          }}
          w="50px"
          h="50px"
          my="4"
        />
      </Link>
      <Link href="mailto:philip.doge.kaminski@gmail.com" target="_top">
        <Icon
          as={FaEnvelope}
          color="whiteAlpha.800"
          _hover={{
            color: "#FFC21B",
          }}
          w="50px"
          h="50px"
          my="4"
          mb="0"
        />
      </Link>
    </Flex>
  );
};

export default SocialsNav3;
