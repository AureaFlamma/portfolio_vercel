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

const NavButton = ({ to }) => {
  return (
    <LinkScroll to={to} spy={true} smooth={true} offset={-80} duration={500}>
      <Button
        transform="rotate(270deg)"
        h="50px"
        bg="null"
        _hover={{ color: "#FFBC1D" }}
        _focus={{ color: "#FFBC1D" }}
        _active={{}} //This is only to override the default chakra _active styling for buttons
        color="whiteAlpha.800"
        cursor="pointer"
      >
        <Text fontSize={"2xl"} textTransform="capitalize">
          {to}
        </Text>
      </Button>
    </LinkScroll>
  );
};

const PageNav = () => {
  return (
    <Flex
      direction="column"
      position="fixed"
      top="calc(50vh - 150px)" //just offsetting it by 50vh would put the *top edge* of the Flex 50vh below top edge of viewport. subtracting half of the height of the flexbox (i.e. half of 300px) will put its *centre* in the middle of the screen
      left="10px" //Unlike the Socisl Nav, which is justified center horizontally, this Page Nav isn't in the middle of the padding (it's a bit to the left) as to leave more whitespace between it and the text of Home/About
      align="center"
      w="50px"
      h="300px"
      lineHeight={"3em"} //This is needed so that the dividers stay more or less in the middle of the letters. Without it they start at the top of the letter.
    >
      <NavButton to="home" />
      <Spacer />
      <Divider border="1px" w="60%" />
      <Spacer />
      <NavButton to="projects" />
      <Spacer />
      <Divider border="1px" w="60%" />
      <Spacer />
      <NavButton to="about" />
    </Flex>
  );
};

export default PageNav;
