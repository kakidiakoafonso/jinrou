import React from "react";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, ActivityIndicator, Image } from "react-native";
import colors from "../../configs/style/colors";

type Props = {
  isLoading: boolean;
  disabled?: boolean;
  onPress: () => void;
};
export function SubmitButton({ isLoading, onPress, disabled = false }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        marginTop: 10,
        height: 80,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.yellow} />
      ) : (
        <Entypo name="plus" size={70} color={colors.yellow} />
      )}
    </TouchableOpacity>
  );
}
