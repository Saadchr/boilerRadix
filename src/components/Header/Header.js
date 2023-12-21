import { Flex, Box, Container, Text } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
import { ActivityLogIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";

function Header() {
  return (
    <Container
      className="border relative h-[42px] border-black"
      color="gray"
      grow={"0"}
      size={"4"}
      pl={"4"}
      pr={"4"}
      pt={0}
      pb={0}
    >
      <Flex className="" align={"center"} justify={"between"} gap={"3"}>
        <ActivityLogIcon />

        <NavigationMenuDemo />

        <MagnifyingGlassIcon />
      </Flex>
    </Container>
  );
}

export default Header;
