import { Box, Container, SimpleGrid, Heading, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const tasks = [
  { id: 1, title: "Task 1", description: "Description for task 1" },
  { id: 2, title: "Task 2", description: "Description for task 2" },
  { id: 3, title: "Task 3", description: "Description for task 3" },
  { id: 4, title: "Task 4", description: "Description for task 4" },
];

const TaskCard = ({ title, description }) => (
  <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
    <Heading fontSize="xl">{title}</Heading>
    <Text mt={4}>{description}</Text>
  </Box>
);

const Tasks = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <NavBar />
      <VStack spacing={4} align="center" mt={4}>
        <Heading as="h1" size="xl">Tasks</Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} w="full">
          {tasks.map(task => (
            <TaskCard key={task.id} title={task.title} description={task.description} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Tasks;