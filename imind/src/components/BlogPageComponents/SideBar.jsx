import { useContext, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiResponseContext } from "../../AppWrapper";

const colorsTheme = ["#fce505", "#242424", "#fcfcfc"];

const Sidebar = () => {
  const [apiResponse, setApiResponse] = useContext(ApiResponseContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIssues, setSelectedIssues] = useState([]);

  const toggleIssues = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = async (event) => {
    const { checked, value } = event.target;
    const newSelectedIssues = checked
      ? [...selectedIssues, value]
      : selectedIssues.filter((issue) => issue !== value);
    setSelectedIssues(newSelectedIssues);

    const params =
      newSelectedIssues.length > 0
        ? `category=${newSelectedIssues.join("&category=")}`
        : "";
    const response = await fetch(
      `https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery?${params}`
    );
    const data = await response.json();
    setApiResponse(data);

    navigate({
      pathname: location.pathname,
      search: params,
    });
  };

  const getCheckboxProps = (issue) => {
    const isChecked = selectedIssues.includes(issue);
    return {
      isChecked,
      onChange: handleCheckboxChange,
      value: issue,
      colorScheme: isChecked ? "yellow" : undefined,
    };
  };

  const issuesToShow = isOpen
    ? [
        "Perfectionism",
        "Exercise",
        "Trauma",
        "Anger",
        "SAD",
        "Phobias",
        "Art Therapy",
        "Time Management",
        "Relationships",
        "PTSD",
        "Addiction",
        "Nature",
        "Eating Disorders",
        "Productivity",
        "Journaling",
        "Disorder",
      ]
    : ["Anxiety", "Depression", "Stress", "Mental Health", "Yoga", "Self-Care"];

  return (
    <Box bg={colorsTheme[1]} w="30%" minH="100vh" p={4}>
      <Flex alignItems="center" mb={4} cursor="pointer" onClick={toggleIssues}>
        <Icon color="yellow" as={isOpen ? ChevronDownIcon : ChevronRightIcon} />
        <Text ml={2} color={colorsTheme[0]} fontSize="xl" fontWeight="bold">
          Filter Blog by Issues
        </Text>
      </Flex>
      <Flex mb={4} direction="column">
        {issuesToShow.map((issue) => (
          <Checkbox
            color={colorsTheme[0]}
            key={issue}
            {...getCheckboxProps(issue)}
            mb={2}
          >
            {issue}
          </Checkbox>
        ))}
      </Flex>
      {!isOpen && (
        <Button size="sm" onClick={toggleIssues}>
          Show More
        </Button>
      )}
    </Box>
  );
};

export default Sidebar;
