import React from "react";
import { Flex, Avatar, Button, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();

  const handleNavigate = (navigate) => {
    history.push(navigate);
  };

  return (
    <Flex
      minH="5rem"
      bg="orange.200"
      direction="row"
      align="center"
      justify="space-between"
      p="1rem 3rem"
    >
      <Avatar
        size="md"
        name="Logo"
        src="https://cdn.dribbble.com/users/725831/screenshots/3251631/__________-2.png"
        onClick={() => handleNavigate("/")}
      />

      <Flex>
        <Button
          variant="ghost"
          colorScheme="teal"
          onClick={() => handleNavigate("/profile")}
        >
          <Text mr="1rem">Profile</Text>
          <Avatar
            size="xs"
            name="Dan Abramov"
            src="https://bit.ly/dan-abramov"
          />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
