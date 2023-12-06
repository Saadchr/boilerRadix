import { Flex, Box, Container } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
import { ActivityLogIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
function Header() {
  return (
    <Container size={"4"}>
      <Box p={"4"} as="nav">
        <Flex align={"center"} justify={"between"} gap={"3"}>
          <ActivityLogIcon />
          <Flex gap={"4"}>
            <Link
              className="no-underline  hover:bg-gray-200 active:bg-gray-300"
              href="/"
            >
              home
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
