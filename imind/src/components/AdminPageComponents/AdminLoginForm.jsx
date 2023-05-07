import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Flex,
  Center,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";
import AdminGreeting from "./AdminGreeting";
import LoginSuccessAlert from "./LoginSuccessAlert";
import { useNavigate } from "react-router-dom";
const AdminLoginForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const colorOptions = ["#fce505", "#242424", "#fcfcfc"];
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // simulate a successful login
      setTimeout(() => {
        setShowSuccess(true);
        setTimeout(() => {
          navigate("/admin");
        }, 1200);
      }, 500);
    },
  });

  const backgroundColor = colorOptions[0];
  const textColor = colorOptions[1];
  const inputColor = colorOptions[2];

  return (
    <Box bg={backgroundColor} minH="80vh" pt={10}>
      <Flex
        bg="gray.300"
        maxH="70vh"
        justify="center"
        align="center"
        opacity="0.9"
        border="2px solid gray"
        maxW="30%"
        mx="auto"
        borderRadius="md"
        p={{ base: 4, md: 8, lg: 12 }}
        boxShadow="0px 0px 10px 2px rgba(0,0,0,0.5)"
      >
        <Box maxW={{ base: "100%", md: "80%", lg: "80%" }}>
          {showSuccess ? (
            <LoginSuccessAlert />
          ) : (
            <Center>
              <AdminGreeting />
            </Center>
          )}

          <form onSubmit={formik.handleSubmit}>
            <FormControl
              isInvalid={formik.touched.username && formik.errors.username}
              mt={{ base: 4, md: 8, lg: 12 }}
            >
              <FormLabel htmlFor="username" color={textColor}>
                <FaUser /> Username
              </FormLabel>
              <Input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                bg={inputColor}
                color={textColor}
              />
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.touched.password && formik.errors.password}
              mt={4}
            >
              <FormLabel htmlFor="password" color={textColor}>
                <FaLock /> Password
              </FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                bg={inputColor}
                color={textColor}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>

            <Button colorScheme="yellow" mt={8} type="submit">
              Login
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminLoginForm;
