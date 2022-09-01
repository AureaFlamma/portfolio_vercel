import React from "react";
import { Flex, Spacer, Text, Image, Link } from "@chakra-ui/react";

function Img({ project }) {
  return (
    <Link href={project.link} isExternal>
      <Image
        src={project.img_src}
        alt={project.alt}
        width="45vw"
        fit="cover"
        fallbackSrc="https://via.placeholder.com/1920x1080.png"
        _hover={{ boxShadow: "0 0 25px #FFBC1D" }}
      />
    </Link>
  );
}

function Description({ project, align }) {
  return (
    <Flex direction="column" w="45vw">
      <Text fontSize={"50"} align={align}>
        {project.name}
      </Text>
      <Text fontSize={"24"} align={align} mt="10px">
        {project.description}
      </Text>
    </Flex>
  );
}

function ProjectsCard({ index, project }) {
  return index % 2 ? (
    <Flex w="full" my="5vh">
      <Img project={project} />
      <Spacer />
      <Description project={project} align="left" />
    </Flex>
  ) : (
    <Flex w="full" my="5vh">
      <Description project={project} align="right" />
      <Spacer />
      <Img project={project} />
    </Flex>
  );
}

export default ProjectsCard;
