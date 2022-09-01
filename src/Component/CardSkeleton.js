import React from "react";
import { Flex, Skeleton, SkeletonText, SkeletonCircle, Spacer, Box, Container, HStack, VStack, Stack } from "@chakra-ui/react";

export const CardSkeleton = () => {
    return (
        <Stack padding={16}>
            <Skeleton h={'40px'} w={'360px'}/>
            <Skeleton h={'25px'} w={'142px'}/>
            <Spacer mt={8}/>
            <SkeletonText />
        </Stack>
    )
}