import React from 'react';
import {Flex, Spacer, Text, Icon} from "@chakra-ui/react";
import { SocialIcon } from 'react-social-icons';     
import SocialsData from '../libs/SocialsData';


const SocialsNav = () => {
    return (
        <Flex direction="column" position="fixed" top="10px" right="10px">
{SocialsData.map((social, i) => (        
<SocialIcon url={social.link} key={i} fgColor="#ffffff80" bgColor='none' style={{ height: 80, width: 80 }}/>
        ))}
        </Flex>
    )
}

export default SocialsNav

{/* <SocialIcon url="https://github.com/AureaFlamma/" fgColor="#ffffff80" bgColor='none' style={{ height: 80, width: 80 }}/> */}
{/* <SocialIcon url={social.link} key={i} fgColor="#ffffff80" bgColor='none' style={{ height: 80, width: 80 }}/> */}
{/* <Icon as={SocialIcon} url={social.link} key={i} color={"red"}/> */}