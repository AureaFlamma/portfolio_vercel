import React from 'react';
import {Flex, Spacer, Text, Icon} from "@chakra-ui/react";
import { SocialIcon } from 'react-social-icons';     
import SocialsData from '../libs/SocialsData';
import {BsGithub} from "react-icons/bs";


const SocialsNav1 = () => {
    return (
        <Flex direction="column" position="fixed" top="10px" right="10px">
{SocialsData.map((social, i) => (        
<Icon as={social.icon} color="whiteAlpha.800" _hover={{color: "green"}} w="12" h="12" my="4"/>
        ))}
        </Flex>
    )
}

export default SocialsNav1;

