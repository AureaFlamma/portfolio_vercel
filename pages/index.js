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
    <div>
      <Flex
        className={styles.gradient}
        direction="column"
        py="110px"
        px="110px"
        // bgGradient="linear(130deg, #0B315E 0%, #FF0E56 74.31%, #FFE70E 103.68%)"
        // backgroundAttachment={"fixed"}
        color="white"
        gap="110px"
      >
        <PageNav />
        <TextCard
          title={Lorem.name}
          subtitle={Lorem.role}
          paragraph={Lorem.personal_profile}
          id="home"
        />
        {/* <Spacer my="40px" /> */}
        <Projects id="projects" />
        {/* <Spacer my="40px" /> */}
        <TextCard subtitle={`About`} paragraph={Lorem.about} id="about" />
        <SocialsNav />
      </Flex>
    </div>
  );
}

// <Head>
//   <title>Philip Kaminski Portfolio</title>
//   <link rel="icon" href="/favicon.ico" />
// </Head>
