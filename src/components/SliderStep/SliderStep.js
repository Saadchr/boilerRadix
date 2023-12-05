"use client";
import React from "react";
import {
  Container,
  Flex,
  Card,
  Slider,
  Button,
  Heading,
  Text,
} from "@radix-ui/themes";

function SliderStep() {
  const [value, setValue] = React.useState(50);
  const handleChange = (value) => {
    console.log(value);
    setValue(value);
  };
  return (
    <Container size={"1"} p={"5"}>
      <Flex direction={"column"} justify={"center"} gap={"6"}>
        <Heading className="self-center">Slider</Heading>
        <Heading className="self-center" color="blue" size={"7"} as="h3">
          {value}
        </Heading>
        <Container>
          <Slider
            onValueChange={handleChange}
            defaultValue={[value]}
            size="3"
          ></Slider>
          <Text>{value}</Text>
        </Container>
        <Flex justify={"center"} gap={"7"}>
          <Button color="yellow" size={"4"} variant="surface">
            +
          </Button>
          <Button color="yellow" size={"4"} variant="surface">
            -
          </Button>
          <Button color="yellow" size={"4"} variant="surface">
            0
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default SliderStep;
