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
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import { signUp } from '../redux/signupReducer/action';

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
  
  export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch()

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(signUp(formData))
        // setFormData(initialState)
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev)=> {
          return { ...prev, [name]: value }
        });
      };
  
    return (
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('gray.50', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={formData.email} onChange={handleChange}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange}/>
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
                  color={'white'}
                  bgGradient="linear(to-r, #e4cf10, #fce505)"
                  _hover={{
                    bgGradient:"linear(to-r, #e8d20b, #fce505)"
                  }}
                  onClick={(e) => handleSubmit(e)}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to={"/login"} color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }