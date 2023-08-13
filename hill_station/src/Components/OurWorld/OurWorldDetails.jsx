import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Flex,
  Text,
  Container,
  SimpleGrid,
  Image,
  Stack,
  Heading,
  VStack,
  List,
  ListItem,
  Button,
  useColorModeValue,
  StackDivider,
  // HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
// import { StarIcon } from "@chakra-ui/icons";

const OurWorldDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [property, setProperty] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`https://database-aliu.onrender.com/property/${id}`);
    setProperty(res.data);
  };
  return (
    <div>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={property.imageUrl}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}
              >
                {property.title}
              </Heading>

              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"3xl"}
              >
                {property.formattedPrice} USD
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  We are very easy going friendly household and this is very
                  much a family home. The dog and cats are very used to visitors
                </Text>
                <Text fontSize={"lg"}>
                  Offering a fitness centre and operating a 24-hour front desk,
                  La Hotel Metro is located in Mumbai. It is 1 km from Kurla
                  Railway Station and Bandra Kurla Complex. Free Wi-Fi access is
                  available.
                </Text>
              </VStack>

              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Free WiFi</ListItem>
                    <ListItem>Tea/coffee maker in all rooms</ListItem>{" "}
                    <ListItem>Family rooms</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Breakfast</ListItem>
                    <ListItem>24-hour front desk</ListItem>
                    <ListItem>Daily housekeeping</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              {/*  */}
            </Stack>
            <Link to={"/address"}>
              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("orange")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Reserve
              </Button>
            </Link>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              {/* <MdLocalShipping /> */}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      {/*  */}
    </div>
  );
};

export default OurWorldDetails;
