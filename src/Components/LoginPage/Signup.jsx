import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Link,useNavigate} from "react-router-dom"
import Login from './Login';
import axios from "axios";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const [newUserData, setNewUserData] = useState({
    email: '',
    password: '',
    name: '',
    lastname: '',
    confirmpassword: '',
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    if (
      newUserData.name.length !== 0 &&
      newUserData.email.length !== 0 &&
      newUserData.password.length !== 0 &&
      newUserData.password === newUserData.confirmpassword
    ) {
      try {
        await postData();
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    } else if (newUserData.password !== newUserData.confirmpassword) {
      toast({
        title: 'Please check your Password',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Please enter all fields',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  async function postData() {
    try {
      await axios.post(`https://long-ruby-kingfisher-kilt.cyclic.cloud//posts`, newUserData);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'#1a1d2e'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <Heading fontSize={'4xl'} textAlign={'center'} spacing={6}>
            Register
          </Heading>
            <HStack>
              
              <Box>
              <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                style={{width:"200px"}}
                variant="filled"
                bg={'purple.50'}
                value={newUserData.name}
                onChange={(e) =>
                  setNewUserData({ ...newUserData, name: e.target.value })
                }
              />
            </FormControl>
              </Box>
              <Box>
              <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                style={{width:"200px"}}
                variant="filled"
                bg={'purple.50'}
                value={newUserData.lastname}
                onChange={(e) =>
                  setNewUserData({ ...newUserData, lastname: e.target.value })
                }
              />
            </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                style={{width:"400px"}}
                variant="filled"
                bg={'purple.50'}
                value={newUserData.email}
                onChange={(e) =>
                  setNewUserData({ ...newUserData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  variant="filled"
                  bg={'purple.50'}
                  value={newUserData.password}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, password: e.target.value })
                  }
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="confirm password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  variant="filled"
                  bg={'purple.50'}
                  value={newUserData.confirmpassword}
                  onChange={(e) =>
                    setNewUserData({
                      ...newUserData,
                      confirmpassword: e.target.value,
                    })
                  }
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.500'}
                color={'white'}
                onClick={handleSignup}
                _hover={{
                  bg: 'blue.600',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <Link color={'blue.400'} to={'/login'}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}