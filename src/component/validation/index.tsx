import { View, Text } from "react-native";
import React from "react";
type Props = {
  message: string;
};
export function ValidaThor({ message }: Props) {
  return <Text style={{ color: "yellow", marginTop: 5 }}>{message}</Text>;
}
