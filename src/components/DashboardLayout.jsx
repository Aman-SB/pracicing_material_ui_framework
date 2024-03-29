import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Flex>
            <SideDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
            <Box
                display={{
                    base: "none",
                    lg: "flex",
                }}
            >
                <Sidenav />
            </Box>
            <Box flexGrow={1}>
                <TopNav title={title} onOpen={onOpen} />
                <Container mt={"6"} maxW={"65rem"} >
                    {children}
                </Container>
            </Box>
        </Flex>
    );
};

export default DashboardLayout;
