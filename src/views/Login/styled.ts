import { Dimensions } from "react-native";
import styled from "styled-components/native";
import cores from "../../configs/style/colors";

const { width } = Dimensions.get("screen");
var borderRadiuos = width * 0.8;

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
`;

export const TopRounded = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  border-bottom-left-radius: ${borderRadiuos + "px"};
  border-bottom-right-radius: ${borderRadiuos + "px"};
`;

export const TopRoundedImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.View`
  flex: 0.6;
  align-items: center;
`;
export const InputContainer = styled.View`
  width: 90%;
  height: 55px;
  background-color: transparent;
  border: 1px solid ${cores.grey};
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 15px;
`;
export const Input = styled.TextInput`
  width: 80%;
  height: 90%;
  font-size: 19px;
  font-weight: bold;
  color: #ccc;
`;

export const ButtonEntrar = styled.TouchableOpacity`
  width: 90%;
  height: 55px;
  background-color: ${cores.yellow};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const ButtonStaffArea = styled.TouchableOpacity`
  width: 90%;
  height: 55px;
  background-color: transparent;
  border: 1px solid ${cores.yellow};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const TextoEntrar = styled.Text`
  font-size: 22px;
  color: ${cores.red};
  font-weight: bold;
`;
export const TextoStaff = styled.Text`
  font-size: 22px;
  color: ${cores.yellow};
  font-weight: bold;
`;

export const TextoInfoWrapper = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TextoInfo = styled.Text`
  font-size: 16px;
  color: ${cores.grey};
`;
export const ButtonCadastrar = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const TextoError = styled.Text`
  font-size: 12px;
  color: ${cores.yellow};
  margin-bottom: 10px;
`;
