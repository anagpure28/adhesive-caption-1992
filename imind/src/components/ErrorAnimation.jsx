import { useState, useEffect } from "react";
import { Box, Heading, Center } from "@chakra-ui/react";
import { FaExclamationCircle } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

const ErrorAnimation = ({ errorMessage }) => {
  const [showMessage, setShowMessage] = useState(false);

  const fadeIn = useSpring({
    opacity: showMessage ? 1 : 0,
    transform: showMessage ? "translateY(0)" : "translateY(50px)",
  });

  useEffect(() => {
    setShowMessage(true);
  }, []);

  return (
    <Box
      mt="80px"
      justify="center"
      align="center"
      borderRadius="md"
      p={{ base: "4", md: "8" }}
      bg="#fff"
      boxShadow="0px 10px 20px rgba(10, 50, 80, 0.5)"
    >
      <animated.div style={fadeIn}>
        <Box textAlign="center">
          <Center>
            <FaExclamationCircle size={35} color="#f00" />
          </Center>
          <Heading size="md" color="#f00" mt="4" fontWeight="semibold">
            Oops! Something went wrong.
          </Heading>
          <Box
            color="#555"
            fontSize={{ base: "sm", md: "md" }}
            mt={{ base: "2", md: "4" }}
            lineHeight={{ base: "base", md: "tall" }}
          >
            {errorMessage}
          </Box>
        </Box>
      </animated.div>
    </Box>
  );
};

export default ErrorAnimation;
