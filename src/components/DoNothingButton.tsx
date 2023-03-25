import React from "react";
import { Button } from "@mantine/core";
import { useStore } from "../zustand/store";

const DoNothingButton = () => {
  const doNothing = useStore((state) => state.doNothing);
  return (
    <Button size="xl" onClick={doNothing}>
      Do Nothing
    </Button>
  );
};

export default DoNothingButton;
