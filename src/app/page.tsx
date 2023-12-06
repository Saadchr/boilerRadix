import Image from "next/image";
import Link from "next/link";
import { Flex, Heading, Card, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex
      grow={"1"}
      direction={"column"}
      justify={"center"}
      align={"center"}
      gap={"3"}
    >
      <Heading>This will handle a link to all the local projects</Heading>
      <ul>
        <li>
          <Card variant="ghost" asChild>
            <Link href="./slider">
              <Text>Go to the Slider Project</Text>
            </Link>
          </Card>
          <Card variant="ghost" asChild>
            <Link href="./slider-auto">
              Go to the Slider with auto-increment Project
            </Link>
          </Card>
        </li>
      </ul>
    </Flex>
  );
}
