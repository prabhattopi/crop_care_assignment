import { Box, Text } from "@chakra-ui/react";
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
} from "chart.js";

import { Line, Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,

  Tooltip,
  Filler,
  Legend
);
const RightMiddleSector = () => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legends: {
      labels: {
        fontSize: 26,
      },
    },
  };

  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [12, 70, 23, 45, 40, 20, 30],
        backgroundColor: "rgb(0,209,255)",
        label: "",
        borderWidth: 1,
      },
      {
        data: [12, 50, 33, 45, 50, 40, 60],
        backgroundColor: "rgb(16,69,255)",
        label: "",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box mt="20px">
      <Text fontWeight="bold" fontSize="20px" mb="20px">
        Earnings
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        boxShadow="xl"
        borderRadius="10px"
        p="3"
        rounded="md"
        bg="white"
        h="350px"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mb="10px"
        >
          <Box>
            <Text textAlign="center" fontSize="13px" color="gray.300">
              Saved this month
            </Text>
          </Box>

          <Box>
            <Text fontSize="30px" fontWeight="bold">
              $12,281
            </Text>
            <Box>
              <Text textAlign="center" fontSize="13px" color="gray.500">
                Your paymetn will be
              </Text>
              <Text textAlign="center" fontSize="13px" color="gray.500">
                updated by the system
              </Text>
            </Box>
          </Box>
        </Box>
        <Bar height={200} options={options} data={data} />
      </Box>
    </Box>
  );
};

export default RightMiddleSector;
