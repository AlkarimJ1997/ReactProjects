import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import { FlexStyles, BoxStyles } from "./NavbarStyles";

const Navbar = () => {
    return (
        <Flex sx={FlexStyles} justify="space-between" wrap="wrap" gap={2}>
            <Box sx={BoxStyles} bg="red">1</Box>
            <Box sx={BoxStyles} bg="blue">2</Box>
            <Box sx={BoxStyles} bg="green">3</Box>
            <Box sx={BoxStyles} bg="yellow">4</Box>
        </Flex>
    )
}

export default Navbar