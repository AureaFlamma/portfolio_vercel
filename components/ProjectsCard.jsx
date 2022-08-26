import React from "react";
import { Flex, Spacer, Text, Image, Link } from "@chakra-ui/react";

function ProjectsCard({ project, index }) {
  return index % 2 ? (
    <Flex w="full" my="5vh">
      <Link href={project.link} isExternal>
        <Image
          src={project.img_src}
          alt={project.alt}
          width="45vw"
          fit="cover"
          fallbackSrc="https://via.placeholder.com/1920x1080.png"
        />
      </Link>
      <Spacer />
      <Flex direction="column" w="45vw">
        <Text mb="5" fontSize={"50"}>
          {project.name}
        </Text>
        <Text fontSize={"30"}>{project.description}</Text>
      </Flex>
    </Flex>
  ) : (
    <Flex w="full" my="5vh">
      <Flex direction="column" w="45vw">
        <Text mb="5" fontSize={"50"} textAlign="right">
          {project.name}
        </Text>
        <Text fontSize={"30"} textAlign="right">
          {project.description}
        </Text>
      </Flex>
      <Spacer />
      <Link href={project.link} isExternal>
        <Image
          src={project.img_src}
          alt={project.alt}
          width="45vw"
          fit="cover"
          fallbackSrc="https://via.placeholder.com/1920x1080.png"
        />
      </Link>
    </Flex>
  );
}

export default ProjectsCard;
