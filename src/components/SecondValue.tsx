import React from "react";
import { Text } from "@mantine/core";
import { useStore } from "../zustand/store";

const SecondValue = () => {
  const secondNumber = useStore((state) => state.secondNumber);

  return <Text size="xl" p={5}>Second Value: {secondNumber}</Text>;
};

export default SecondValue;
