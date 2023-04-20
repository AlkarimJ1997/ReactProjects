import { Container, Heading, Text, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
    const boxStyles = {
        p: "10px",
        bg: "purple.400",
        color: "white",
        m: "10px",
        textAlign: "center",
        filter: "blur(2px)",
        ':hover': {
            color: "black",
            bg: "blue.200",
            filter: "blur(0px)"
        }
    }

    return (
        <>
            <Navbar />
            <Container as="section" maxW="4xl" py="20px">
                <Heading my={30} p="10px">Chakra UI Components</Heading>
                <Text ml={30} color="blue.300" fontWeight="bold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, porro.
                </Text>
                <Box my={30} p="20px" bg="orange">
                    <Text color="white">This is a box</Text>
                </Box>

                <Box sx={boxStyles}>
                    Hello, Ninjas!
                </Box>
            </Container>
        </>
    );
}

export default App;
