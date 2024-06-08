import { Container, VStack, Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import HealthChart from "../components/HealthChart";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <NavBar />
      <Flex direction="column" align="center" justify="center" mt={4}>
        <VStack spacing={4} w="full">
          <Box w="full">
            <HealthChart />
          </Box>
          <Box w="full">
            <HealthChart />
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;