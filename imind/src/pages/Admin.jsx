import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import PostANewBlog from "../components/AdminPageComponents/PostANewBlog";
import AdminPageTable from "../components/AdminPageComponents/AdminPageTable";

const Admin = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Flex direction="column">
      <Flex
        justifyContent="center"
        alignItems="center"
        width="20%"
        border="2px solid #718096"
        color="2px solid #718096"
        bg="green.100"
        cursor="pointer"
        onClick={handleToggleForm}
        p={5}
        borderRadius={10}
        margin="auto"
        mt="10px"
        mb="10px"
      >
        <Text fontSize="2xl" fontWeight="bold">
          {" "}
          {showForm ? "Close Blog Post Form" : "Post a New Blog"}
        </Text>
      </Flex>
      {showForm && <PostANewBlog />}
      <Text fontSize="4xl" fontWeight="extrabold" bg="yellow.100">
        DASHBOARD
      </Text>
      <hr />
      <AdminPageTable />
    </Flex>
  );
};

export default Admin;
