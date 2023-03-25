import React from "react";
import { Button } from "@mantine/core";
import { useStore } from "../zustand/store";

const AddToFirstButton = () => {
  const addToFirst = useStore((state) => state.addToFirst);
  return (
    <Button size="xl" onClick={addToFirst}>
      Add to First
    </Button>
  );
};

export default AddToFirstButton;
