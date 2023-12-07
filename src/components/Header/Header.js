import { Flex, Box, Container, Text } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
import { ActivityLogIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
function Header() {
  return (
    <Container
      color="gray"
      grow={"0"}
      className="border-4 border-blue-500"
      size={"4"}
      p={"4"}
    >
      <Flex align={"center"} justify={"between"} gap={"3"}>
        <ActivityLogIcon />
        <Flex gap={"4"}>
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
        </Flex>
        <MagnifyingGlassIcon />
      </Flex>
    </Container>
  );
}

export default Header;
