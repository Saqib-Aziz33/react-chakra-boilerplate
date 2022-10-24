import {
  Container,
  Heading,
  Box,
  Text,
  Flex,
  VStack,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

function ContactUs() {
  return (
    <Box bg="blue.600" className="contact-us" py={16} mb={32}>
      <Container maxW={1200} color="white">
        <VStack>
          <Heading>Contact Us</Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            numquam veritatis eius?
          </Text>
          <Flex
            direction="column"
            gap={8}
            as="form"
            bg="whiteAlpha.200"
            maxW={600}
            w="100%"
            p={8}
            rounded="lg"
          >
            <Input placeholder="Your name" type="text" />
            <Input placeholder="Your email" type="email" />
            <Textarea placeholder="your message..." />
            <Button colorScheme="gray" color="#3d3d3d">
              Submit
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
export default ContactUs;
