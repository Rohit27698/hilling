import React, { useContext, useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { AuthContext } from "../../ContextApi/AuthcontextProvider";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const { login } = useContext(AuthContext);
  const{setLogedUser}=useContext(AuthContext);
  const Navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getData, setGetData] = useState([]);

  async function getLoginData() {
    try {
      const getItem = await axios.get(`https://long-ruby-kingfisher-kilt.cyclic.cloud//posts`);
      setGetData(getItem.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLoginData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const matchedUser = getData.find((user) => user.email === email && user.password === password);
    
    if (matchedUser) {
      login();
      toast({
        title: 'Welcome to HILLING TRAVEL AGENCY.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      Navigate("/");
      loginName(matchedUser.name);
    } else {
      toast({
        title: 'Please Check your Email & Password',
        status: 'error',
        position: 'top',
        duration: 1000,
        isClosable: true,
      });
    }
  };

  async function loginName(val) {
   setLogedUser(val)
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'#1a1d2e '}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={8}>
            <Heading fontSize={'4xl'} textAlign={'center'} >
              Sign in to your Account
            </Heading>
            <Stack>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "400px" }}
                  variant="filled"
                  bg={"purple.50"} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="filled"
                  bg={"purple.50"} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                </Stack>
                <Button
                  onClick={handleLogin}
                  bg={'blue.500'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.600',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                New User? <Link color={'blue.400'} to={'/signup'}>Register</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
