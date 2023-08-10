import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Text,
  HStack,
  Input,
  Center,
  Button,
  GridItem,
  Image,
  Badge,
  Grid,
  Select,
  Stack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const OurWorld = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByPrice, setFilterByPrice] = useState("");
  const [filterByRating, setFilterByRating] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://database-aliu.onrender.com/property");
    setProperties(res.data);
  };

  const handleSearch = () => {
    const filteredProperties = properties.filter((property) => {
      const title = property.country.toLowerCase();
      return title.includes(searchTerm.toLowerCase());
    });
    setSearchResults(filteredProperties);
  };

  const handleFilterByPrice = (event) => {
    setFilterByPrice(event.target.value);
  };

  const handleFilterByRating = (event) => {
    setFilterByRating(event.target.value);
  };

  const filteredProperties = properties.filter((property) => {
    const title = property.country.toLowerCase();
    return title.includes(searchTerm.toLowerCase());
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (filterByPrice === "lowToHigh") {
      const priceA = parseFloat(a.formattedPrice.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.formattedPrice.replace(/[^0-9.-]+/g, ""));
      return priceA - priceB;
    } else if (filterByPrice === "highToLow") {
      const priceA = parseFloat(a.formattedPrice.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.formattedPrice.replace(/[^0-9.-]+/g, ""));
      return priceB - priceA;
    } else if (filterByRating === "lowToHigh") {
      return a.rating - b.rating;
    } else if (filterByRating === "highToLow") {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     fetchData();
  //   }, 1000);

  //   return () => clearTimeout(delayDebounceFn);
  // }, [setSearchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchResults]);

  return (
    <>
      <Box
        p={{ base: "40px 20px", md: "90px 210px" }}
        backgroundColor={"rgb(124, 141, 211)"}
        textAlign={"left"}
      >
        <Box color={"white"}>
          <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight={700}>
            Find your next stay
          </Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }}>
            Search low prices on hotels, homes and much more...
          </Text>
        </Box>
        <Center mt="50px">
          <Box h="69px">
            <HStack
              bg={"white"}
              p="3px"
              borderRadius={"10px"}
              gap={"2px"}
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "10px", md: "2px" }}
            >
              <Input
                borderWidth="3px"
                borderColor="gray.300"
                width={{ base: "100%", md: "30%" }}
                variant={"outline"}
                placeholder="Where are you going?"
                size="lg"
                color="black"
                bg="white"
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <Input
                borderWidth="3px"
                borderColor="gray.300"
                width={{ base: "100%", md: "382px" }}
                placeholder="Select Date and Time"
                size="lg"
                type="date"
                bg="white"
              />
              <Input
                borderWidth="3px"
                borderColor="gray.300"
                width={{ base: "100%", md: "350px" }}
                placeholder="No of persons "
                size="lg"
                bg="white"
              />
              <Button
                fontSize={"20px"}
                size="lg"
                backgroundColor={"orange"}
                color={"white"}
                padding={{ base: "5px", md: "2px" }}
                width={{ base: "100%", md: "130px" }}
                borderRadius={"8px"}
                onClick={handleSearch}
              >
                Search
              </Button>
            </HStack>
            {/* <Center> */}
            <HStack mt="50px">
              <Text
                fontSize="3xl"
                mr="30px"
                color={"white"}
                fontWeight={"600"}
                direction={{ base: "column", md: "row" }}
              >
                Sort by:{" "}
              </Text>
              <Select
                borderWidth="3px"
                borderColor="gray.300"
                width={{ base: "100%", md: "250px" }}
                placeholder="Sort by Price"
                size="lg"
                fontSize={{ base: "16px", md: "20px" }}
                value={filterByPrice}
                onChange={handleFilterByPrice}
              >
                <option value="">None</option>
                <option value="lowToHigh">Price (Low to High)</option>
                <option value="highToLow">Price (High to Low)</option>
              </Select>
              <Select
                borderWidth="3px"
                borderColor="gray.300"
                width={{ base: "100%", md: "250px" }}
                placeholder="Sort by Ratings"
                size="lg"
                fontSize={{ base: "16px", md: "20px" }}
                value={filterByRating}
                onChange={handleFilterByRating}
              >
                <option value="">None</option>
                <option value="lowToHigh">Rating (Low to High)</option>
                <option value="highToLow">Rating (High to Low)</option>
              </Select>
            </HStack>
            {/* </Center> */}
          </Box>
        </Center>
      </Box>
      <Stack>
        <Text fontSize="4xl" fontWeight={"700"} bg={"orange"}>
          Showing Hotels in{" "}
          {searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}
        </Text>
      </Stack>
      <Grid
      paddingTop={"40px"}
        templateColumns="repeat(3, 1fr)"
        gap={1}
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={1}
        // mt={{ base: 4, md: 8 }}
        //  padding="50px 80px"
      >
        {sortedProperties.map((property) => (
          <GridItem
            key={property.id}
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              bg="white"
              _dark={{
                bg: "gray.800",
              }}
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              // margin="-30px -30px"
            >
              <Image
                src={property.imageUrl}
                alt={property.imageAlt}
                roundedTop="lg"
              />

              <Box p="6">
                <Box display="GridItem" alignItems="baseline">
                  <Badge rounded="full" px="2" colorScheme="teal">
                    New
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {property.beds} beds &bull; {property.baths} baths
                  </Box>
                </Box>

                <Text
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                  textAlign={"left"}
                >
                  {property.title}
                </Text>

                <Box textAlign={"left"} ml="2px">
                  {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>

                <Box display="GridItem" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < property.rating ? "teal.500" : "gray.300"}
                      />
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviewCount} reviews
                  </Box>
                  <Link to={`/ourworlds/${property.id}`}>
                    <Button
                      ml={"80px"}
                      fontSize={"20px"}
                      size="md"
                      bg={"orange"}
                      color={"white"}
                      padding={"2px"}
                      width={"100px"}
                      borderRadius={"8px"}
                      _hover={{ bg: "#7C8DD3" }}
                    >
                      Details
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default OurWorld;
