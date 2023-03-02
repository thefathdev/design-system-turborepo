import * as React from "react";
import { Button as MantineButton } from "@mantine/core";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <MantineButton>{props.children}</MantineButton>;
}

Button.displayName = "Button";
