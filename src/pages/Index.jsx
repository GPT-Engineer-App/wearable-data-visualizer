import { Container, VStack, Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import NavBar from "../components/NavBar";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Index = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Steps",
        data: [3000, 4000, 5000, 6000, 7000, 8000, 9000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Calories Burned",
        data: [200, 300, 400, 500, 600, 700, 800],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Activity Data',
      },
    },
  };

  return (
    <>
      <NavBar />
      <Container maxW="container.xl" p={4}>
        <VStack spacing={4} align="stretch">
          <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
            <Text fontSize="xl" mb={4}>Welcome to Your Health Dashboard</Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box>
                <Line data={data} options={options} />
              </Box>
              <Box>
                <Line data={data} options={options} />
              </Box>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Index;