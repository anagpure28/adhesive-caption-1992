import React from "react";
import { BlogGrid } from "../components/BlogPageComponents/BlogGrid";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/BlogPageComponents/SideBar";
import AdminLoginForm from "../components/AdminPageComponents/AdminLoginForm";

const Blog = () => {
  return (
    <Flex direction="row" minH="85vh">
      <Sidebar />
      <BlogGrid />
    </Flex>
  );
};

export default Blog;
