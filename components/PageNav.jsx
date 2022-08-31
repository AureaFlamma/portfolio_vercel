import React from "react";
import {
  Flex,
  Text,
  Spacer,
  AbsoluteCenter,
  Button,
  Link,
  Divider,
} from "@chakra-ui/react";
import { Link as LinkScroll } from "react-scroll";

const PageNav = () => {
  const navigationData = [{ name: "About", link: "#About" }];
  return (
    <Flex
      direction="column"
      position="fixed"
      top="10px"
      left="10px"
      align="center"
      w="40px"
    >
      <LinkScroll to="home" spy={true} smooth={true} offset={50} duration={500}>
        <Flex
          transform="rotate(270deg)"
          h="40px"
          bg="null"
          my="40px"
          px="40px"
          _hover={{ color: "#FFBC1D" }}
          color="whiteAlpha.800"
          cursor="pointer"
        >
          <Text fontSize={"2xl"}>Home</Text>
        </Flex>
      </LinkScroll>
      <Divider border="2px" />
      <LinkScroll
        to="projects"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <Flex
          transform="rotate(270deg)"
          h="40px"
          bg="null"
          my="40px"
          px="40px"
          color="whiteAlpha.800"
          _hover={{ color: "#FFBC1D" }}
          cursor="pointer"
        >
          <Text fontSize={"2xl"}>Projects</Text>
        </Flex>
      </LinkScroll>
      <Divider border="2px" />
      <LinkScroll
        to="about"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <Flex
          transform="rotate(270deg)"
          h="40px"
          bg="null"
          my="40px"
          px="40px"
          color="whiteAlpha.800"
          _hover={{ color: "#FFBC1D" }}
          cursor="pointer"
        >
          <Text fontSize={"2xl"}>About</Text>
        </Flex>
      </LinkScroll>
    </Flex>
  );
};

export default PageNav;
