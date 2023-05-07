import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

// const colorsTheme = ["#fce505", "#242424", "#fcfcfc"];

export default function SearchBar({ handleSearchChange, searchTerm }) {
  return (
    <InputGroup width={["80%", "80%", "80%"]} mx="auto" mt={4}>
      <InputLeftElement
        pointerEvents="none"
        children={<FaSearch />}
        color="gray.100"
      />
      <Input
        type="text"
        value={searchTerm}
        placeholder="Search for blog posts"
        bg="gray.800"
        color="gray.100"
        border="none"
        borderRadius="md"
        py={4}
        pl={10}
        pr={4}
        onChange={handleSearchChange}
      />
    </InputGroup>
  );
}
