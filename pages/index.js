import Head from "next/head";
import TextCard from "../components/TextCard";
import Projects from "../components/Projects";
import { Flex, Spacer } from "@chakra-ui/react";
import Lorem from "../libs/Lorem";
import SocialsNav2 from "../components/SocialsNav2";
import PageNav from "../components/PageNav";
export default function Index() {
  return (
    <div>
      <Flex
        direction="column"
        bg="yellow"
        p="clamp(50px, 5vh, 5vh)"
        bgGradient="linear(130deg, #0B315E 0%, #FF0E56 74.31%, #FFE70E 103.68%)"
        backgroundAttachment={"fixed"}
        color="white"
      >
        <PageNav />
        <TextCard
          title={Lorem.name}
          subtitle={Lorem.role}
          paragraph={Lorem.personal_profile}
          id="home"
        />
        <Spacer my="2.5vh" />
        <Projects />
        <Spacer my="2.5vh" />
        <TextCard title={`About`} paragraph={Lorem.about} id="about" />
        <SocialsNav2 />
      </Flex>
    </div>
  );
}

// <Head>
//   <title>Philip Kaminski Portfolio</title>
//   <link rel="icon" href="/favicon.ico" />
// </Head>
