import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

import moment from "moment";
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
} from "chart.js";

import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const LowerSector = () => {
  const [sorting, setSorting] = useState(false);
  const { response } = useAxios(
    `/coins/bitcoin/market_chart?vs_currency=usd&days=7`
  );
  if (!response) {
    return <div>...Loading</div>;
  }
  let coinChartData = response.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  const options = {
    responsive: true,
    aspectMaintainRatio:false
  };

  console.log(coinChartData);
  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: "bitcoin",
        data: coinChartData.map((value) => value.y),
        borderColor: "rgb(16,69,255)",
        backgroundColor: "rgb(146,150,255)",
      },
    ],
  };
  const data2 = [
    {
      id: 1,
      name: "Jiko Mobile App",
      time: "12 Nov 12:45 AM",
      price: 15,
    },
    {
      id: 2,
      name: "Jiko Mobile App",
      time: "12 Nov 12:45 AM",
      price: 15,
    },
    {
      id: 3,
      name: "Jiko Mobile App",
      time: "12 Nov 12:45 AM",
      price: 15,
    },
    {
      id: 4,
      name: "Jiko Mobile App",
      time: "12 Nov 12:45 AM",
      price: 15,
    },
  ];
  return (
    <>
      <Flex justify="space-between" gap="10px" p="10px">
        <Box mt="20px">
          <Text fontWeight="bold" fontSize="20px" mb="20px">
            Recent Transactions
          </Text>

        
            <Box
             
              boxShadow="2xl"
              display="flex"
              flexDirection="column"
              borderRadius="10px"
              p="3"
              rounded="md"
              bg="white"
              h="310px"
              w="290px"
              mr="5px"
              gap="10px"
            >
              {
                data2.map(e=>(
                  <Box
                  key={e.id}
                boxShadow="m"
                borderRadius="5px"
                display="flex"
                justifyContent="space-between"
                p="5px"
                alignItems="center"
              >
                <Box display="flex" gap="5px">
                  <Box
                    height="50px"
                    width="50px"
                    overflow="hidden"
                    borderRadius="10px"
                    border="1px solid white"
                  >
                    <Image
                      borderRadius="10px"
                      objectFit="contain"
                      width="100%"
                      height="100%"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblQ39R7clUseJbQEuw2p1-i7mI-Ygqb6opQ&usqp=CAU"
                      alt="Dan Abramov"
                    />
                  </Box>

                  <Box display="flex" flexDirection="column">
                    <Text fontWeight="bold" fontSize="14px">
                      {e.name}
                    </Text>
                    <Text fontSize="12px" color="gray.300">
                      {e.time}
                    </Text>
                  </Box>
                </Box>

                <Box>
                  <Text fontWeight="bold" fontSize="14px">
                    ${e.price}
                  </Text>
                </Box>
              </Box>
                ))
              }
              
            </Box>
       
        </Box>
        <Box mt="20px">
          <Text fontWeight="bold" fontSize="20px" mb="20px">
            Recent Transactions
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            boxShadow="xl"
            borderRadius="10px"
            p="3"
            rounded="md"
            bg="white"
            h="310px"
            mr="10px"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="10px"
              flexDirection="column"
            >
              <Box>
                <Text fontSize="12px" color="gray.400">
                  Accounts reached
                </Text>
              </Box>
              <Box>
                <Text fontSize="25px" fontWeight="bold">
                  11,756
                </Text>
              </Box>
              <Box display="flex" alignItems="center" gap="20px">
                <Text fontSize="15px" color="gray.400">
                  Day
                </Text>
                <Text fontSize="15px" color="gray.400">
                  Week
                </Text>
                <Text fontSize="15px" color="gray.400">
                  Month
                </Text>
                <Text fontSize="15px" color="gray.400">
                  Year
                </Text>
              </Box>
            </Box>
            <Line height={200} options={options} data={data} />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default LowerSector;
