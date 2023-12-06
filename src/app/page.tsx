import Image from "next/image";
import Link from "next/link";
import { Flex, Heading, Card } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-4 ">
      <Flex direction={"column"} gap={"3"}>
        <Heading>This will handle a link to all the local projects</Heading>
        <ul>
          <li>
            <Card variant="ghost" asChild>
              <Link href="./slider">Go to the Slider Project</Link>
            </Card>
            <Card variant="ghost" asChild>
              <Link href="./slider-auto">
                Go to the Slider with auto-increment Project
              </Link>
            </Card>
          </li>
        </ul>
      </Flex>
    </main>
  );
}
