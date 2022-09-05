import React from "react";
import {
  Flex,
  Spacer,
  Text,
  Image,
  Link,
  scaleFadeConfig,
} from "@chakra-ui/react";

function Img({ project }) {
  return (
    <Flex width={{ base: "full", lg: "45%" }}>
      <Link href={project.link} isExternal>
        <Image
          src={project.img_src}
          alt={project.alt}
          width="full"
          fit="cover"
          opacity={0.8}
          fallbackSrc="https://via.placeholder.com/1920x1080.png"
          _hover={{
            base: "none",
            lg: {
              transform: "scale(1.2)",
              transition: "transform .2s",
              opacity: "1",
            },
          }}
        />
      </Link>
    </Flex>
  );
}

function Description({ project, align }) {
  return (
    <Flex direction="column" w={{ base: "full", lg: "40%" }}>
      <Text
        fontSize={{ base: "24", lg: "50" }}
        align={{ base: "center", lg: [align] }}
      >
        {project.name}
      </Text>
      <Text
        fontSize={{ base: "18", lg: "24" }}
        align={{ base: "justify", lg: [align] }}
        mt="10px"
      >
        {project.description}
      </Text>
    </Flex>
  );
}

function ProjectsCardDesktop({ index, project }) {
  return index % 2 ? (
    <Flex justifyContent={"flex-end"} gap="85px" w="full">
      <Description project={project} align="right" />
      <Img project={project} />{" "}
    </Flex>
  ) : (
    <Flex justifyContent={"flex-start"} gap="85px" w="full">
      <Img project={project} />

      <Description project={project} align="left" />
    </Flex>
  );
}

function ProjectsCardMobile({ index, project }) {
  return (
    <Flex gap="20px" w="full" direction="column">
      <Img project={project} />
      <Description project={project} align="right" />
    </Flex>
  );
}

export { ProjectsCardDesktop, ProjectsCardMobile };
