import { Flex, Spinner } from "@chakra-ui/react";
import styled, { keyframes } from "styled-components";

const CustomLoader = ({ text, pleasewait }) => {
  const loadingAnimation = keyframes`
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  `;

  const LoadingText = styled.div`
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: #333;
    animation: ${loadingAnimation} 1s alternate infinite ease-in-out;
  `;

  return (
    <Flex
      align="center"
      justify="center"
      minH="100vh"
      bg="gray.50"
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="9999"
      direction={{ sm: "column", md: "row", lg: "row" }}
    >
      <LoadingText>{pleasewait}</LoadingText>
      <Spinner size="xl" color="blue.500" />
      <Spinner size="lg" color="red.500" mt={4} />
      <Spinner size="md" color="green.500" mt={4} />
      <Spinner size="sm" color="yellow.500" mt={4} />
      <LoadingText>{text}</LoadingText>
    </Flex>
  );
};

export default CustomLoader;
