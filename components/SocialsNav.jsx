import React from "react";
import { Link, Icon, Text, Flex, Box } from "@chakra-ui/react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

//The big Flex is offset-top by 110px, which is the height of the top padding of the page
//The icons (and therefore the flex) have a width of 50px. The right padding of the page is 120px, so right-offseting the big Flex by 30px justifies it horizontally.

const SocialIcon = ({ href, icon }) => {
  return (
    <Link href={href} isExternal download>
      <Icon
        as={icon}
        color="whiteAlpha.800"
        _hover={{
          color: "#0b165e",
        }}
        w="50px"
        h="50px"
      />
    </Link>
  );
};

const SocialsNav3 = () => {
  return (
    <Flex
      direction={"column"}
      position="fixed"
      top="110px"
      right="30px"
      gap="5"
    >
      <SocialIcon href="https://github.com/AureaFlamma" icon={FaGithub} />
      <SocialIcon
        href="https://www.linkedin.com/in/kaminskp/"
        icon={FaLinkedin}
      />
      <SocialIcon
        href="mailto:philip.doge.kaminski@gmail.com"
        icon={FaEnvelope}
      />
      <SocialIcon href="/PK_CV.pdf" icon={IoDocumentText} />
    </Flex>
  );
};

export default SocialsNav3;
