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


  import { useContext, useState } from "react";
  import { useNavigate ,Link} from "react-router-dom";
  import { AuthContext } from "../../ContextApi/AuthcontextProvider";
  
  
  export default function Login() {

    const {login} =useContext(AuthContext);
    const   Navigate=useNavigate();
    const toast=useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
      const userData = JSON.parse(localStorage.getItem("user"));
      if(userData){
        if(userData.email === email && userData.password === password){
          localStorage.setItem("auth", JSON.stringify(true))
          toast({
            title: 'Welcome to HILLING TRAVEL AGENCY.',
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          login()
          Navigate("/")

          
        }else if (userData.email !==email || userData.password!==password){
          toast({
            title: 'Please Check your Email & Password',
            status: 'error',
            position:'top',
            duration: 2000,
            isClosable: true,
          })
        }
        }
    };



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
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
                <Input type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 style={{width:"400px"}}
                 variant="filled"
                 bg={"purple.50"} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 variant="filled"
                 bg={"purple.50"}/>
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