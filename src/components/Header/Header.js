import { Flex, Box, Container, Text } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
import { ActivityLogIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
function Header() {
  return (
    <Container
      grow={"0"}
      className="border-4 border-blue-400"
      height={"1"}
      size={"4"}
    >
      <Box height={"1"} p={"4"} as="nav">
        <Flex align={"center"} justify={"between"} gap={"3"}>
          <ActivityLogIcon />
          <Flex gap={"4"}>
            <Link
              className="no-underline  hover:bg-gray-200 active:bg-gray-300"
              href="/"
            >
              <Text size={"1"}>home</Text>
            </Link>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
          </Flex>
          <MagnifyingGlassIcon />
        </Flex>
      </Box>
    </Container>
  );
}

export default Header;
