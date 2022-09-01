import React from "react";
import { Flex, Spacer, Text, Image, Link } from "@chakra-ui/react";

function Img({ project }) {
  return (
    <Flex width="45%" bg="pink">
      <Link href={project.link} isExternal>
        <Image
          src={project.img_src}
          alt={project.alt}
          width="full"
          fit="cover"
          fallbackSrc="https://via.placeholder.com/1920x1080.png"
          _hover={{ boxShadow: "0 0 25px #FFBC1D" }}
        />
      </Link>
    </Flex>
  );
}

function Description({ project, align }) {
  return (
    <Flex direction="column" w="40%">
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
    <Flex justifyContent={"flex-start"} gap="40px" w="full">
      <Img project={project} />

      <Description project={project} align="left" />
    </Flex>
  ) : (
    <Flex justifyContent={"flex-end"} gap="40px" w="full">
      <Description project={project} align="right" />
      <Img project={project} />{" "}
    </Flex>
  );
}

export default ProjectsCard;
