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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { FiMenu } from "react-icons/fi";

const MobileMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        w="37px"
        h="37px"
        bg="white"
        rounded={"full"}
        icon={<HamburgerIcon color="black" w="20px" h="20px" />}
      >
        {/* <HamburgerIcon bg="black" /> */}
      </MenuButton>
    </Menu>
  );
};

export default MobileMenu;
