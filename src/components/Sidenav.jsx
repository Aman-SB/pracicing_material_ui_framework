import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowLeftRight } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icon: BsArrowLeftRight,
            text: "Transactions",
            link: "/transactions",
        },
    ];
    return (
        <Stack
            boxShadow={{
                base: "none",
                lg: "lg",
            }}
            w={{
                base: "full",
                lg: "16rem",
            }}
            h="100vh"
            bg={"white"}
            justify="space-between"
        >
            <Box>
                <Heading
                    as="h1"
                    fontSize="20px"
                    pt="3.5rem"
                    textAlign={"center"}
                >
                    Crpto Tracker
                </Heading>
                <Box mt="6" mx="3">
                    {navLinks.map((nav) => (
                        <HStack
                            key={nav.text}
                            py={3}
                            px={4}
                            _hover={{
                                bg: "#F3F3F7",
                                color: "#171717",
                            }}
                            borderRadius={10}
                            color="#797E82"
                        >
                            <Icon as={nav.icon} />
                            <Text fontSize="14px" fontWeight="medium">
                                {nav.text}
                            </Text>
                        </HStack>
                    ))}
                </Box>
            </Box>

            <Box mt="6" mx="3" mb="6">
                <HStack
                    py={3}
                    px={4}
                    _hover={{
                        bg: "#F3F3F7",
                        color: "#171717",
                    }}
                    borderRadius={10}
                    color="#797E82"
                >
                    <Icon as={BiSupport} />
                    <Text fontSize="14px" fontWeight="medium">
                        Support
                    </Text>
                </HStack>
            </Box>
        </Stack>
    );
};

export default Sidenav;
