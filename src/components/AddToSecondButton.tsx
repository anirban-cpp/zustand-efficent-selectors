import React from "react";
import { Button } from "@mantine/core";
import { useStore } from "../zustand/store";

const AddToSecondButton = () => {
  const addToSecond = useStore((state) => state.addToSecond);
  return (
    <Button size="xl" onClick={addToSecond}>
      Add to Second
    </Button>
  );
};

export default AddToSecondButton;
