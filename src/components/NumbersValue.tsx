import React from "react";
import { Text } from "@mantine/core";
import { shallow } from 'zustand/shallow'
import { useStore } from "../zustand/store";
const NumbersValue = () => {
  const numbers = useStore((state) => state.numbers, shallow);  // enforcing shallow equals so that not only referential equality is taken into account

  return <Text size="xl" p={5}>Numbers: {numbers.join(",")}</Text>;
};

export default NumbersValue;
