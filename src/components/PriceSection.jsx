import React from "react";
import { CustomCard } from "../chakra/CustomCard";
import {
    Button,
    Flex,
    HStack,
    Icon,
    Image,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tag,
    Text,
} from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { BsArrowUpRight } from "react-icons/bs";

const PriceSection = () => {
    const timeStamps = [
        "7:15 PM",
        "12:55 AM",
        "6:35 AM",
        "12:55 PM",
        "9:15 PM",
    ];
    return (
        <CustomCard>
            <Flex justifyContent={"space-between"} align={"start"}>
                <HStack>
                    <Stack>
                        <HStack color="black.80">
                            <Text fontSize="sm">Wallet Balances</Text>
                        </HStack>
                        <HStack
                            spacing={2}
                            align={{
                                base: "flex-start",
                                sm: "center",
                            }}
                            flexDir={{
                                base: "column",
                                sm: "row",
                            }}
                        >
                            <HStack>
                                <Text textStyle="h2" fontWeight="medium">
                                    22.39401000
                                </Text>{" "}
                                <HStack
                                    fontWeight={"medium"}
                                    color={"green.500"}
                                >
                                    <Icon as={BsArrowUpRight}></Icon>
                                    <Text fontSize={"sm"} fontWeight="medium">
                                        22 %
                                    </Text>
                                </HStack>
                            </HStack>
                        </HStack>
                    </Stack>
                </HStack>

                <HStack>
                    <Button leftIcon={<Icon as={IoIosAddCircle} />}>Buy</Button>
                    <Button leftIcon={<Icon as={GrSubtractCircle} />}>
                        Sell
                    </Button>
                </HStack>
            </Flex>

            <Tabs variant="soft-rounded" >
                <Flex justify={"end"}>
                    <TabList bg={"black.5"} borderRadius={"xl"} p={"3px"}>
                        {["1H", "1D", "1W", "1M"].map((tab) => (
                            <Tab key={tab} fontSize={"sm"} borderRadius={"4px"}>
                                {tab}
                            </Tab>
                        ))}
                    </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image src="src\assets\graph.svg" mt={"3rem"} />
                        <HStack justify={"space-between"}>
                            {timeStamps.map((timestamp) => (
                                <Text
                                    key={timestamp}
                                    fontSize={"sm"}
                                    color={"black.80"}
                                >
                                    {" "}
                                    {timestamp}
                                </Text>
                            ))}
                        </HStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </CustomCard>
    );
};

export default PriceSection;
