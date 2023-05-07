import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function AdminGreeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 0 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 16) {
      setGreeting("Good afternoon");
    } else if (currentHour >= 16 && currentHour < 19) {
      setGreeting("Good evening");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <Text
      fontSize="1xl"
      textShadow="2px  #333"
      fontWeight="bold"
      letterSpacing="wide"
    >
      {greeting} Admin! Please enter your login credentials to access your
      account
    </Text>
  );
}

export default AdminGreeting;
