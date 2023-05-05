import React from "react";
import { BlogGrid } from "../components/BlogPageComponents/BlogGrid";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/BlogPageComponents/SideBar";

const Blog = () => {
  return (
    <Flex direction="row">
      <Sidebar />
      <BlogGrid />
    </Flex>
  );
};

export default Blog;
