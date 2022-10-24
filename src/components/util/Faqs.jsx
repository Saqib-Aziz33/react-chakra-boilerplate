import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import faqData from "./faq.json";

function Faqs() {
  return (
    <Box className="faqs">
      <Container maxW={1200} my={16}>
        <Heading textAlign="center" mb={4}>
          Faqs
        </Heading>
        <Accordion allowToggle maxW={800} mx="auto">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} my={4} border="none" shadow="sm">
              <Heading>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight={600}
                    fontSize="1.1rem"
                    py={2}
                  >
                    {faq.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>{faq.content}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
}
export default Faqs;
