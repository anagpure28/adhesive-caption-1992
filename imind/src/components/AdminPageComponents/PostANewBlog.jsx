import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  useToast,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  FaEye,
  FaHeading,
  FaImage,
  FaInfoCircle,
  FaQuoteLeft,
  FaSave,
  FaTag,
  FaThumbsUp,
  FaUser,
  FaYoutube,
} from "react-icons/fa";

const PostANewBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [view, setView] = useState("");
  const [like, setLike] = useState("");
  const [youtube, setYoutube] = useState("");
  const [quote, setQuote] = useState("");
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          details,
          image,
          author,
          category,
          view,
          like,
          youtube,
          quote,
        }),
      }
    );

    if (response.ok) {
      setTitle("");
      setDescription("");
      setDetails("");
      setImage("");
      setAuthor("");
      setCategory("");
      setLike("");
      setCategory("");
      setYoutube("");
      setCategory("");
      setView("");
      setQuote("");
      toast({
        title: "Blog post created!",
        description: "Your new blog post has been successfully created.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error creating blog post",
        description: "There was an error creating your blog post.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex alignItems="center" justifyContent="center" bg="yellow.100">
      <Box
        p={8}
        width={500}
        bg="gray.100"
        boxShadow="0 10px 50px rgba(5, 5, 15, 0.5)"
        borderRadius={8}
        mt={20}
        mb={20}
      >
        <Heading mb={4} color="black">
          Create a New Blog Post
        </Heading>
        <form onSubmit={handleSubmit}>
          <InputGroup mb={4}>
            <InputLeftElement children={<FaHeading />} />
            <Input
              placeholder="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              borderColor="gray.700"
            />
          </InputGroup>
          <InputGroup mb={4}>
            <InputLeftElement children={<FaInfoCircle />} />
            <Input
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              borderColor="gray.700"
            />
          </InputGroup>
          <InputGroup mb={4}>
            <Textarea
              placeholder="Details"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              required
              borderColor="gray.700"
            />
          </InputGroup>
          <InputGroup mb={4}>
            <InputLeftElement children={<FaImage />} />
            <Input
              placeholder="Image URL"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              required
              borderColor="gray.700"
            />
          </InputGroup>
          <InputGroup mb={4}>
            <InputLeftElement children={<FaUser />} />
            <Input
              placeholder="Author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              required
              borderColor="gray.700"
            />
          </InputGroup>
          <InputGroup mb={4}>
            <InputLeftElement children={<FaTag />} />
            <Input
              placeholder="Category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
              borderColor="gray.700"
            />
          </InputGroup>
          <InputGroup mb={4}>
            <InputLeftElement children={<FaEye />} />
            <Input
              type="number"
              placeholder="View"
              value={view}
              onChange={(event) => setView(event.target.value)}
              required
              borderColor="gray.700"
            />
          </InputGroup>
          <InputGroup mb={4}>
            <InputLeftElement children={<FaThumbsUp />} />
            <Input
              type="number"
              placeholder="Like"
              value={like}
              onChange={(event) => setLike(event.target.value)}
              required
              borderColor="gray.700"
            />
          </InputGroup>
          <InputGroup mb={4}>
            <InputLeftElement children={<FaYoutube />} />
            <Input
              type="url"
              placeholder="Youtube URL"
              value={youtube}
              onChange={(event) => setYoutube(event.target.value)}
              required
              borderColor="gray.700"
            />
          </InputGroup>
          <InputGroup mb={4}>
            <InputLeftElement children={<FaQuoteLeft />} />
            <Input
              placeholder="Quote"
              value={quote}
              onChange={(event) => setQuote(event.target.value)}
              required
              borderColor="gray.700"
            />
          </InputGroup>
          <Button type="submit" color="black" leftIcon={<FaSave />}>
            Save
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default PostANewBlog;
