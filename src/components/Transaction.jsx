import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../chakra/CustomCard";

const Transaction = () => {
    return (
        <CustomCard h={"full"}>
            <Text fontSize={"sm"} color={"black.80"} mb={"6"}>
                Recent Transactions
            </Text>
            <HStack>
                <Icon></Icon>
                <HStack>
                    <Stack>
                        <Text textStyle={"h6"}>INR Deposit</Text>
                        <HStack>
                            <Text>2022-06-09</Text>
                            <Text>7:06 Pm</Text>
                        </HStack>
                    </Stack>
                </HStack>
            </HStack>
        </CustomCard>
    );
};

export default Transaction;
