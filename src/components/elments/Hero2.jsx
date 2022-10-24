import {
  Container,
  Box,
  VStack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

function Hero2() {
  return (
    <Box className="hero2">
      <Container maxW={1200} px={4} py={32} backdropFilter="blur(2px)">
        <VStack>
          <Heading size={["xl", "2xl"]}>
            Some Other{" "}
            <Text as="span" color="blue.600">
              Heading
            </Text>
          </Heading>
          <Text fontSize="lg" pt={2} pb={4} maxWidth="500px" textAlign="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
            exercitationem.
          </Text>
          <Button variant="outline" colorScheme="facebook">
            Call to Action
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
export default Hero2;
