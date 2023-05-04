import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('gray.700', 'gray.700')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('gray.400', 'gray.400'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithLogoLeft() {
    return (
      <Box
        bg={useColorModeValue('black', 'gray.900')}
        color={useColorModeValue('white', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'8xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={3}>
            <SocialButton label={'Facebook'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Spotify'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <Text py={1}>Subscribe</Text>
          </Stack>
          <Text>Go To Your Happy Place</Text>
          <Text>Recovery © 2023. All Rights Reserved.</Text>
        </Container>
      </Box>
    );
  }