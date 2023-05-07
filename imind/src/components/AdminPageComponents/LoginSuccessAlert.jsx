import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const LoginSuccessAlert = () => {
  return (
    <Alert status="success" borderRadius="md">
      <AlertIcon as={FaCheckCircle} boxSize="2em" mr={2} />
      <AlertTitle mr={2}>Login Successful!</AlertTitle>
    </Alert>
  );
};

export default LoginSuccessAlert;
