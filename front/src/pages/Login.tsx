import { Button, Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Register(): JSX.Element {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={10}>
        <Box textAlign="center">
          <Heading>Login with Metamask</Heading>
        </Box>
        <Box textAlign="left">
          <Button className="loginLoginButton" colorScheme={'teal'} width="full" mt={4} type="submit" >
            Click here!
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
