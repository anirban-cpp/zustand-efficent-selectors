import React from "react";
import { Text } from "@mantine/core";
import { useStore } from "../zustand/store";

const FirstValue = () => {
  const { firstNumber } = useStore();

  return <Text size="xl" p={5}>First Value: {firstNumber}</Text>;
};

export default FirstValue;
