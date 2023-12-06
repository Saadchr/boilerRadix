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
  const reduce = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + state.step, step: state.step };
      case "decrement":
        return { count: state.count - state.step, step: state.step };
      case "reset":
        return { count: 0, step: state.step };
      case "update":
        return { count: state.count, step: action.step };
      default:
        throw new Error();
    }
  };

  const [count, dispatch] = React.useReducer(reduce, { count: 0, step: 1 });
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleChange = (value) => {
    dispatch({ type: "update", step: Number(value) });
  };

  return (
    <Container size={"1"} p={"5"}>
      <Flex direction={"column"} justify={"center"} gap={"6"}>
<<<<<<< Updated upstream
        <Heading className="self-center">Slider</Heading>
        <Heading className="self-center" color="blue" size={"7"} as="h3">
=======
        <Heading size={"9"} className="self-center">
          Slider
        </Heading>
        <Heading className="self-center" color="blue" size={"9"} as="h3">
>>>>>>> Stashed changes
          {count.count}
        </Heading>
        <Flex justify={"center"} gap={"3"} align={"center"}>
          <Slider
            className="w-[200px]"
            onValueChange={handleChange}
            defaultValue={[1]}
            size="3"
          ></Slider>
          <Text>{count.step}</Text>
        </Flex>
        <Flex justify={"center"} gap={"7"}>
          <Button
            onClick={handleIncrement}
            color="yellow"
            size={"4"}
            variant="surface"
          >
            +
          </Button>
          <Button
            onClick={handleDecrement}
            color="yellow"
            size={"4"}
            variant="surface"
          >
            -
          </Button>
          <Button
            onClick={handleReset}
            color="yellow"
            size={"4"}
            variant="surface"
          >
            0
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default SliderStep;
