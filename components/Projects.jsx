import { Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectsData from "../libs/ProjectsData";

function Projects() {
  return (
    <Flex direction="column">
      <Text fontSize="120" fontWeight="700" lineHeight={"1"}>
        My projects
      </Text>
      <Flex mt="4em" direction="column">
        {ProjectsData.map((project, i) => (
          <ProjectsCard project={project} key={i} index={i} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Projects;
