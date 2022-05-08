import { Button, Box, Flex, Spacer, ButtonGroup, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <>
      <Box outline={'solid'} outlineColor={'black'} w="100%" p={4} bgColor="gray.300">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Heading>Hackaton Starton</Heading>
          <br/>
          <Spacer />
          <ButtonGroup gap="2">
            <Link to="/login">
              <Button className="homeLoginButton" size="lg" colorScheme="teal">
                Login
              </Button>
            </Link>
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
}
