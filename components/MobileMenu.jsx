import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Icon,
  Button,
  Flex,
  IconButton,
  Spacer,
  Divider,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavButton } from "./PageNav";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

import { FiMenu } from "react-icons/fi";

const MobileMenu = () => {
  return (
    <Flex
      direction="row"
      position="fixed"
      bottom="0"
      left="0"
      align="center"
      w="full"
      h="40px"
      lineHeight={"3em"} //This is needed so that the dividers stay more or less in the middle of the letters. Without it they start at the top of the letter.
      zIndex={1}
      bg="whiteAlpha.800"
    >
      <Spacer />
      <NavButton to="home" />
      <Spacer />
      <Divider
        orientation="vertical"
        h="60%"
        border="1px"
        borderColor="#0b165e"
      />
      <Spacer />
      <NavButton to="projects" />
      <Spacer />
      <Divider
        orientation="vertical"
        h="60%"
        border="1px"
        borderColor="#0b165e"
      />
      <Spacer />
      <NavButton to="about" />
      <Spacer />
      <Divider
        orientation="vertical"
        h="60%"
        border="1px"
        borderColor="#0b165e"
      />
      <Spacer />
      <SocialsMenu />
      <Spacer />
    </Flex>
  );
};

const SocialsMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        w="37px"
        h="37px"
        // bg="yellow"
        bg="null"
        icon={<HamburgerIcon color="black" w="20px" h="20px" />}
      ></MenuButton>
      <MenuList color="black" w="100vw">
        <Link href="https://github.com/AureaFlamma" isExternal>
          <MenuItem icon={<IoDocumentText fontSize={"30px"} />}>
            GitHub
          </MenuItem>
        </Link>
        <Link href="https://www.linkedin.com/in/kaminskp/" isExternal>
          <MenuItem icon={<FaLinkedin fontSize={"30px"} />}>LinkedIn</MenuItem>
        </Link>
        <Link href="mailto:philip.doge.kaminski@gmail.com" isExternal>
          <MenuItem icon={<FaEnvelope fontSize={"30px"} />}>Email me</MenuItem>
        </Link>
        <Link href="/PK_CV.pdf">
          <MenuItem icon={<IoDocumentText fontSize={"30px"} />}>My CV</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export { SocialsMenu, MobileMenu };
