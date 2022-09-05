import { Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { ProjectsCardDesktop, ProjectsCardMobile } from "./ProjectsCard";
import ProjectsData from "../libs/ProjectsData";

function Projects({ id, isMobile }) {
  return (
    <Flex direction="column" id={id}>
      <Text
        fontSize={{ base: "40", lg: "120" }}
        fontWeight="600"
        lineHeight={"1"}
      >
        My projects
      </Text>
      <Flex mt={{ base: "30px", lg: "80px" }} direction="column" gap="110px">
        {ProjectsData.map((project, i) =>
          isMobile ? (
            <ProjectsCardMobile project={project} key={i} index={i} />
          ) : (
            <ProjectsCardDesktop project={project} key={i} index={i} />
          )
        )}
      </Flex>
    </Flex>
  );
}

export default Projects;
