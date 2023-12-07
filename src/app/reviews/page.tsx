import { Heading, Text, Box, Container, Card } from "@radix-ui/themes";
import Link from "next/link";

const Reviews = () => {
  return (
    <Container size={"4"} p={"4"}>
      <Box>
        <Heading mb={"4"}>All Reviews:</Heading>
        <Card size={"1"} variant="ghost" asChild>
          <Link href="./reviews/final-ff5">
            <Text size={"3"}>Final Fantasy 5 </Text>
          </Link>
        </Card>
        <Card size={"1"} variant="ghost" asChild>
          <Link href="./reviews/final-ff5">
            <Text size={"3"}>Pandemonium 3 </Text>
          </Link>
        </Card>
      </Box>
    </Container>
  );
};

export default Reviews;
