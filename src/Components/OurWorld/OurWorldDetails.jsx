import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
} from "@chakra-ui/react";
import { AuthContext } from "../../ContextApi/AuthcontextProvider";

const OurWorldDetails = () => {
  const{isLogged}=useContext(AuthContext)
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const Navigate=useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/property/${id}`);
    setProperty(res.data);
    
  };
  const handlesubmit=()=>{
    isLogged? Navigate('/address'):Navigate('/login')
   }
  return (
    <div style={{backgroundColor:'#1a1d2c' ,color:'white'}}>
      <Container maxW={"7xl"} >
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
              <Heading lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}>
                {property.country}
              </Heading>

              <Text
                color={'white'}
                fontWeight={300}
                fontSize={"3xl"}
              >
                ₹ {property.formattedPrice} INR
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={'black'}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={'seagreen'}
                  fontSize={"2xl"}
                  fontWeight={"300"}>
                  We are very easy going friendly household and this is very
                  much a family home. The dog and cats are very used to visitors
                </Text>
                
              </VStack>

              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Beds:  {property.beds}</ListItem>
                    <ListItem>Free WiFi</ListItem>
                    <ListItem>Tea/coffee maker in all rooms</ListItem>{" "}
                    <ListItem>Family rooms</ListItem>
                  </List>
                  <List spacing={2}>
                  <ListItem>Bathroom:  {property.baths}</ListItem>
                    <ListItem>Breakfast</ListItem>
                    <ListItem>24-hour front desk</ListItem>
                    <ListItem>Daily housekeeping</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              {/*  */}
            </Stack>
              <Button
                rounded={"none"}
                w={"full"}
                borderRadius={"50px"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={'orange'}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                  
                }}
                onClick={handlesubmit}
              >
                Book Your Destination
              </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      {/*  */}
    </div>
  );
};

export default OurWorldDetails;
