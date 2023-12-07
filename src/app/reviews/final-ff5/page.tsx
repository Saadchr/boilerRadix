import {
  Heading,
  Text,
  Card,
  Flex,
  Box,
  Container,
  Inset,
  Strong,
} from "@radix-ui/themes";

import Image from "next/image";

const Page = () => {
  return (
    <Container p={"4"} className="border border-blue-400" size={"4"}>
      <Box>
        <Card size="2" style={{ maxWidth: 440 }} className="p-0">
          <Inset clip="padding-box" side="top" pb="current">
            <Image
              width={440}
              height={240}
              layout=""
              src={"/images/iconHeadphones.jpg"}
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <Text className="border m-0 border-red-400" as="p" size="3">
            <Strong>Typography</Strong> is the art and technique of arranging
            type to make written language legible, readable and appealing when
            displayed.
          </Text>
        </Card>
      </Box>
    </Container>
  );
};

export default Page;
