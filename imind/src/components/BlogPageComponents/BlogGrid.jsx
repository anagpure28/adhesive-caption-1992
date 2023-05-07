import { Grid, Flex, Box, ScaleFade, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BlogCard } from "./BlogCard";
import CustomLoader from "../CustomLoader";
import SearchBar from "./SearchBar";
import AdminLoginLink from "../AdminPageComponents/AdminLoginLink";
import ErrorAnimation from "../ErrorAnimation";
import { ApiResponseContext } from "../../AppWrapper";

export const BlogGrid = () => {
  const [loading, setLoading] = useState(false);

  // From Dummy Search
  const [searchTerm, setSearchTerm] = useState("");
  const [apiResponse, setApiResponse] = useContext(ApiResponseContext);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    setLoading(true);
    const fetchResults = async () => {
      const params = new URLSearchParams({ title: debouncedSearchTerm });
      const response = await axios.get(
        `https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery?${params}`
      );
      setApiResponse(response.data);
      setLoading(false);
    };

    fetchResults();
  }, [debouncedSearchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // -----------------------------------

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery`)
      .then((res) => {
        setApiResponse(res.data);
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
          <AdminLoginLink />
          <SearchBar
            handleSearchChange={handleSearchChange}
            searchTerm={searchTerm}
          />

          {apiResponse.length > 0 ? (
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
              {apiResponse.map((el) => (
                <BlogCard key={el.id} {...el} />
              ))}
            </Grid>
          ) : (
            <ErrorAnimation errorMessage="Sorry, we couldn't find any results matching your search term. Please try a different search term." />
          )}
        </Box>
      )}
    </Flex>
  );
};
