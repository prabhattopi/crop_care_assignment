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
const BodySector = () => {
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

  return (
    <>
      <Flex justify="space-between" gap="20px">
        <Box mt="20px">
          <Text fontWeight="bold" fontSize="20px" mb="20px">
            Anylatics
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            boxShadow="2xl"
            borderRadius="10px"
            p="3"
            rounded="md"
            bg="white"
            h="300px"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb="30px"
            >
              <Box bg="gray.500" borderRadius="20px" width="70px">
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="13px"
                  color="white"
                >
                  Income
                </Text>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Text>Sort By</Text>
              <Box
                display="flex"
                alignItems="center"
                gap="10px"
                bg="gray.500"
                borderRadius="20px"
                width="100px"
                justifyContent="center"
              >
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="13px"
                  color="white"
                >
                  Month{" "}
                </Text>
                {!sorting ? (
                  <BiDownArrowAlt color="white" />
                ) : (
                  <BiUpArrowAlt color="white" />
                )}
              </Box>
              </Box>
            </Box>
            <Line height={200} options={options} data={data} />
          </Box>
        </Box>
        <Box mt="20px">
          <Text fontWeight="bold" fontSize="20px" mb="20px">
            Reminder
          </Text>
          <Box
            p="10px"
            mr="20px"
            w="230px"
            h="290px"
            bg="#1045ff"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            borderRadius="20px"
          >
            <Box>
              <Text color="white" fontWeight="bold" fontSize="20px">
                Agency Design Kit
              </Text>
            </Box>

            <Image
              borderRadius="20px"
              boxSize="100px"
              objectFit="cover"
              src="data:image/png;base64,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"
              alt="Dan Abramov"
            />
            <Box>
              <Text color="white" fontWeight="bold" fontSize="15px">
                Will be Published
              </Text>
            </Box>
            <Box>
              <Text color="white" fontWeight="bold" fontSize="15px">
                Nov 25, 2022
              </Text>
            </Box>
            <Box>
              <Button
                size="md"
                mb={3}
                width="200px"
                bg="white"
                color="blackAlpha.800"
              >
                Set as Reminder
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default BodySector;
