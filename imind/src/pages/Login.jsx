import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { login } from '../redux/authReducer/action'; 
import { useNavigate } from 'react-router-dom';
  
  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch()
  
    const handleLogin = () => {
      const userData = {email, password}
      dispatch(login(userData))
      alert("Login Successfull!!")
      setTimeout(()=> {
        navigate("/")
      },1000)
    }
  
    return (
      <Flex
        minH={'90vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'pink.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input 
                  type="email" 
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input 
                  type="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'pink.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  colorScheme={"white"}
                  bgGradient="linear(to-r, #e4cf10, #fce505)"
                  _hover={{
                    bgGradient:"linear(to-r, #e8d20b, #fce505)"
                  }}
                  onClick={handleLogin}
                  >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }