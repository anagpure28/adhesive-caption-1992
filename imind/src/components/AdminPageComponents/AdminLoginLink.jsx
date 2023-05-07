import React, { useState } from "react";
import {
  Link as ChakraLink,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";

const AdminLoginLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => {};
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box display="inline-block" position="relative">
      <ChakraLink
        href="#"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        color="#dcc810"
        fontWeight="bold"
        _hover={{ textDecoration: "none" }}
      >
        x
      </ChakraLink>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay bg="rgba(0,0,0,0.0)" />
        <ModalContent bg="transparent">
          <ModalCloseButton />
          <ModalBody>
            <ChakraLink href="/admin-login" fontWeight="bold">
              <Icon as={FaLock} mr={2} />
              Admin Access Panel
            </ChakraLink>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdminLoginLink;
