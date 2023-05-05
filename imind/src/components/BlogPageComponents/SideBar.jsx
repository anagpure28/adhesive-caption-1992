import { useState } from "react";
import { Box, Text, List, ListItem, Checkbox } from "@chakra-ui/react";
import { MdViewList } from "react-icons/md";

const colorsTheme = ["#fce505", "#242424", "#fcfcfc"];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const handleCheckboxChange = (event) => {
    const label = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCheckedItems(new Set(checkedItems).add(label));
    } else {
      const newCheckedItems = new Set(checkedItems);
      newCheckedItems.delete(label);
      setCheckedItems(newCheckedItems);
    }
  };

  const allIssues = [
    "Anxiety",
    "Mental Health",
    "Depression",
    "Stress",
    "Mindfulness",
    "Yoga",
    "Self-Care",
    "Sleep",
    "Grief",
    "Resilience",
    "Self-Talk",
    "Nutrition",
    "Perfectionism",
    "Mind-Body Connection",
    "Exercise",
    "Trauma",
    "OCD",
    "Anger",
    "Frustration",
    "SAD",
    "Work-Life Balance",
    "Technology",
    "Phobias",
    "Art Therapy",
    "Time Management",
    "Relationships",
    "PTSD",
    "Addiction",
    "Nature",
    "Boundaries",
    "Financial Stress",
    "Eating Disorders",
    "Productivity",
    "Self-Esteem",
    "Journaling",
  ];

  const visibleIssues = allIssues.slice(0, 6);

  return (
    <Box
      bg={colorsTheme[1]}
      color={colorsTheme[0]}
      width={["30%", "35%", "30%"]}
      p={8}
    >
      <Text fontSize="lg" fontWeight="bold" mb={8}>
        Latest Posts
      </Text>
      <Text mb={2} cursor="pointer" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "Filter Blog by Issues ▼" : "Hide Issues ▲"}
      </Text>
      <List spacing={3}>
        {visibleIssues.map((issue) => (
          <ListItem key={issue}>
            <Checkbox
              name={issue}
              onChange={handleCheckboxChange}
              colorScheme="yellow"
            >
              {issue}
            </Checkbox>
          </ListItem>
        ))}
        {!collapsed &&
          allIssues.slice(6).map((issue) => (
            <ListItem key={issue}>
              <Checkbox
                name={issue}
                onChange={handleCheckboxChange}
                colorScheme="yellow"
              >
                {issue}
              </Checkbox>
            </ListItem>
          ))}
        {!collapsed && (
          <ListItem cursor="pointer" onClick={() => setCollapsed(!collapsed)}>
            <Text>Hide Issues ▲</Text>
            <MdViewList color={colorsTheme[1]} />
          </ListItem>
        )}
      </List>
    </Box>
  );
}

export default Sidebar;
