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
  Flex
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const OurWorld = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByPrice, setFilterByPrice] = useState("");
  const [filterByRating, setFilterByRating] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const fetchData = async () => {
    const url = (`https://long-ruby-kingfisher-kilt.cyclic.cloud/`)
    let last = '/property'
    const qp = [];
    if (searchResults) {
      qp.push(`q=${searchResults}`)
    }
    if (qp.length > 0) {
      last += `?${qp.join('&')}`
    }
    const res = await axios.get(url+last);
    
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
  useEffect(() => {
    fetchData();
  }, [searchResults]);

  return (
    <div style={{backgroundColor:'#1a1d2c' ,color:'white'}}>
      <Box
        p={{ base: "10px 20px", md: "20px 50px" }}
        backgroundColor={"#1a1d2c"}
        textAlign={"left"}
      >
        <Box color={"white"}>
          <Text fontSize={{ base: "xxxxs", md: "2xl" }} fontWeight={700}>
            Find your next stay
          </Text>
          <Text fontSize={{ base: "2xl", md: "xl" }}>
            Search low prices on hotels, homes and much more...
          </Text>
        </Box>
      </Box>
      <Flex justifyContent={'space-around'}>
   
            <Flex  mt={'20px'}>
             
              <Select
                borderWidth="3px"
                borderColor="gray.300"
                width={{ base: "100%", md: "250px" }}
                placeholder="Sort by Price"
                size="lg"
                fontSize={{ base: "16px", md: "20px" }}
                textColor={'orange'}
                
                value={filterByPrice}
                onChange={handleFilterByPrice}
              >
                <option  value="lowToHigh">Price (Low to High)</option>
                <option   value="highToLow">Price (High to Low)</option>
              </Select>
              <Select
                borderWidth="3px"
                borderColor="gray.300"
                width={{ base: "100%", md: "250px" }}
                placeholder="Sort by Ratings"
                size="lg"
                color={'orange'}
                fontSize={{ base: "16px", md: "20px" }}
                value={filterByRating}
                onChange={handleFilterByRating}
              ><option value="lowToHigh">Rating (Low to High)</option>
                <option value="highToLow">Rating (High to Low)</option>
              </Select>
            </Flex>
            <Box gap={'10px'}>
            <Input mt={'20px'}
            mr={'20px'}
                borderWidth="3px"
                borderColor="gray.300"
                width={"400px"}
                variant={"outline"}
                placeholder="Where are you going?"
                size="lg"
                color="black"
                bg="white"
                onChange={(event) => setSearchTerm(event.target.value)}
               
              />
            </Box>
             
      </Flex>
      <Grid
      paddingTop={"15px"}
        templateColumns="repeat(3, 1fr)"
        gap={1}
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={1}
      >
        {sortedProperties.map((property) => (
          <GridItem
            key={property.id}
            bg="#1a1d2c"
            _dark={{
              bg: "#1a1d2c",
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
                  color={'black'}
                >
                  {property.title}
                </Text>

                <Box textAlign={"left"} ml="2px" color={'teal'}> 
                ₹ {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                  </Box>
                </Box>

                <Box display="GridItem" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < property.rating ? "green" : "gray.300"}
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
    </div>
  );
};

export default OurWorld;
