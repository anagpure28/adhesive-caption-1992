import { useState, useEffect } from "react";
import { Table, Tbody, Tr, Td, Image, Button, Box } from "@chakra-ui/react";
import { AiOutlineLoading } from "react-icons/ai";

function AdminPageTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery"
    );
    const jsonData = await response.json();
    setData(jsonData);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const response = await fetch(
      `https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Box textAlign="center">
          <AiOutlineLoading size={50} />
        </Box>
      ) : (
        <Box>
          <Table variant="striped">
            <thead>
              <Tr fontSize="1xl" fontWeight="bold">
                <Td>Image</Td>
                <Td>Title</Td>
                <Td>Author</Td>
                <Td>Category</Td>
                <Td>Like</Td>
                <Td>View</Td>
                <Td>Delete</Td>
              </Tr>
            </thead>
            <Tbody>
              {data.map((item) => (
                <Tr key={item.id}>
                  <Td>
                    <Image
                      src={item.image}
                      alt={item.title}
                      boxSize={{ sm: "50px", md: "75px", lg: "100px" }}
                      objectFit="cover"
                    />
                  </Td>
                  <Td>{item.title}</Td>
                  <Td>{item.author}</Td>
                  <Td>{item.category}</Td>
                  <Td>{item.like}</Td>
                  <Td>{item.view}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </>
  );
}

export default AdminPageTable;
