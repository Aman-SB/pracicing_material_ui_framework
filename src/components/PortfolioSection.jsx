import { Box, Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdDownload } from "react-icons/md";
import { MdFileUpload } from "react-icons/md";

const PortfolioSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <HStack
            justify="space-between"
            bg="white"
            borderRadius="xl"
            p="6"
            align={{
                base: "flex-start",
                xl: "center",
            }}
            flexDir={{
                base: "column",
                xl: "row",
            }}
            spacing={{
                base: 4,
                xl: 0,
            }}
        >
            <HStack
                spacing={{
                    base: 4,
                    xl: 16,
                }}
                align={{
                    base: "flex-start",
                    xl: "center",
                }}
                flexDir={{
                    base: "column",
                    xl: "row",
                }}
            >
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm">Total Portfolio Value</Text>
                        <Box
                            position="relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <AiOutlineInfoCircle size={16} />
                            {isHovered && (
                                <Text
                                    position="absolute"
                                    top="100%"
                                    left="50%"
                                    transform="translateX(-50%)"
                                    bg="white"
                                    p={2}
                                    borderRadius="md"
                                    fontSize="sm"
                                >
                                    Additional Information
                                </Text>
                            )}
                        </Box>
                    </HStack>
                    <Text textStyle="h2" fontWeight="medium">
                        ₹ 112,312.24
                    </Text>
                </Stack>

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
                            <Tag colorScheme="gray" fontWeight="medium">
                                BTC
                            </Tag>
                        </HStack>
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium">
                                ₹ 1,300.00
                            </Text>{" "}
                            <Tag colorScheme="gray">INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>
            </HStack>

            <HStack>
                <Button leftIcon={<Icon as={MdDownload} />}>Deposit</Button>
                <Button leftIcon={<Icon as={MdFileUpload} />}>Withdraw</Button>
            </HStack>
        </HStack>
    );
};

export default PortfolioSection;
