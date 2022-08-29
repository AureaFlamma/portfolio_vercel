import React from "react";
import { Flex, Spacer, Text, Image, Link } from "@chakra-ui/react";

function Img({ project}) {
  return (<Link href={project.link} isExternal>
        <Image
          src={project.img_src}
          alt={project.alt}
          width="45vw"
          fit="cover"
          fallbackSrc="https://via.placeholder.com/1920x1080.png"
        />
      </Link>)
};

function Description({ project}) {
  return (<Flex direction="column" w="45vw">
  <Text mb="5" fontSize={"50"}>
    {project.name}
  </Text>
  <Text fontSize={"30"}>{project.description}</Text>
</Flex>)
};


function ProjectsCard({ index, project }) {
  return index % 2 ? (
    <Flex w="full" my="5vh">
      <Img project={project}/>
      <Spacer />
      <Description project={project}/>
    </Flex>
  ) : (
    <Flex w="full" my="5vh">
      
      <Description project={project}/>
      <Spacer />
      <Img project={project}/>
    </Flex>
  );
}

export default ProjectsCard;
