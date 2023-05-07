import { Box, Image, Link, Text, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const BlogCard = ({
  id,
  title,
  image,
  description,
  author,
  category,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/blog/${id}`);
  };
  const navigate = useNavigate();
  return (
    <Box
      borderRadius="10px"
      borderWidth="1px"
      borderColor="#fce505"
      backgroundColor="#242424"
      padding="20px"
      marginBottom="20px"
    >
      {" "}
      <Text
        color="white"
        fontSize="xl"
        fontWeight="bold"
        marginBottom="10px"
        fontStyle="italic"
      >
        {title}
      </Text>
      <Flex justifyContent="flex-end">
        <Text
          color="white"
          marginBottom="10px"
          fontSize="md"
          fontWeight="bold"
          // textTransform="uppercase"
          letterSpacing="wide"
          mr={4}
          _hover={{
            textDecoration: "underline",
            textDecorationColor: "white",
            cursor: "pointer",
          }}
        >
          <i>by:</i> {author}
        </Text>
      </Flex>
      <Image
        src={image}
        alt={title}
        borderRadius="10px"
        borderWidth="1px"
        border="5px solid #fce505"
        marginBottom="10px"
      />
      <Text color="white" marginBottom="10px">
        {description}
      </Text>
      <Flex alignItems="center" justifyContent="space-evenly">
        <Text
          // color="white"
          marginBottom="10px"
          bgColor="yellow.400"
          color="black"
          fontWeight="medium"
          p="5px"
          borderRadius="10px"
        >
          {category}
        </Text>
      </Flex>
      <Link
        color="#fce505"
        href={`/blog/:${id}`}
        marginBottom="10px"
        onClick={handleClick}
      >
        Know More...
      </Link>
    </Box>
  );
};
