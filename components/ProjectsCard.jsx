import React from "react";
import { Flex, Spacer, Text, Image, Link } from "@chakra-ui/react";

function ProjctsCard({ project }) {
  return (
    <Flex bg="pink" w="full">
      <Link href={project.link} isExternal>
        <Image
          src={project.img_src}
          alt={project.alt}
          width="45vw"
          fit="cover"
        />
      </Link>
      <Spacer />
      <Flex direction="column" w="45vw" bg="black">
        <Text mb="5" fontSize={"50"}>
          {project.name}
        </Text>
        <Text fontSize={"30"}>{project.description}</Text>
      </Flex>
    </Flex>
  );
}

export default ProjctsCard;
