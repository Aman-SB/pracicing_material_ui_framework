import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    Heading,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

const TopNav = ({ title ,onOpen }) => {
    return (
        <Box boxShadow="xl" px={"4"} bg={"white"}>
            <HStack
                maxW={"65rem"}
                h={"16"}
                justify={"space-between"}
                mx={"auto"}
            >
                <Icon as={TiThMenu} 
                onClick={onOpen}
                    display={{
                        lg : "none",
                        md : "block"
                    }}
                />
                <Heading fontWeight={"medium"} fontSize={"28"}>
                    {title}
                </Heading>

                <Menu>
                    <MenuButton>
                        <Icon as={FaRegCircleUser} fontSize={"24px"} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    );
};

export default TopNav;
