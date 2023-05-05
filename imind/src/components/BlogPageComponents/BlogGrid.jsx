import { Grid, Flex, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BlogCard } from "./BlogCard";
import CustomLoader from "../CustomLoader";
import SearchBar from "./SearchBar";

export const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery`)
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <Flex justifyContent="center" width="150%" backgroundColor="#fce505">
      {loading ? (
        <CustomLoader text={"Loading..."} pleasewait="Please wait..." />
      ) : (
        <Box>
          <SearchBar />
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            maxWidth="1200px"
            width="100%"
            paddingX={{ base: "20px", md: "40px", lg: "80px" }}
            marginTop="40px"
          >
            {blogs.map((el) => (
              <BlogCard key={el.id} {...el} />
            ))}
          </Grid>
        </Box>
      )}
    </Flex>
  );
};
