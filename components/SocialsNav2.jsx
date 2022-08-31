import React from "react";
import { Link, Icon, Text, Flex, Box } from "@chakra-ui/react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialsNav3 = () => {
  return (
    <Flex direction={"column"} position="fixed" top="10px" right="10px">
      <Link href="https://github.com/AureaFlamma" isExternal>
        <Icon
          as={FaGithub}
          color="whiteAlpha.800"
          _hover={{
            color: "#FFC21B",
            boxShadow: "inset 0px 0px 20px #ffd45e",
          }}
          w="12"
          h="12"
          my="4"
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
          w="12"
          h="12"
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
          w="12"
          h="12"
          my="4"
        />
      </Link>
    </Flex>
  );
};

export default SocialsNav3;
