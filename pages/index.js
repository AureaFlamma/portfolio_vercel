import Head from "next/head";
import TextCard from "../components/TextCard";
import Projects from "../components/Projects";
import { Flex, Spacer } from "@chakra-ui/react";
import Lorem from "../libs/Lorem";
import SocialsNav from "../components/SocialsNav";
import PageNav from "../components/PageNav";
import styles from "./background.module.css";
export default function Index() {
  return (
    <Flex
      className={styles.gradient}
      direction="column"
      py={{ base: "40px", lg: "110px" }}
      px={{ base: "20px", lg: "110px" }}
      color="white"
      gap={{ base: "50px", lg: "110px" }}
    >
      {/* <PageNav /> */}
      <TextCard
        title={Lorem.name}
        subtitle={Lorem.role}
        paragraph={Lorem.personal_profile}
        id="home"
      />

      <Projects id="projects" />

      <TextCard subtitle={`About`} paragraph={Lorem.about} id="about" />
      {/* <SocialsNav /> */}
    </Flex>
  );
}

// <Head>
//   <title>Philip Kaminski Portfolio</title>
//   <link rel="icon" href="/favicon.ico" />
// </Head>
