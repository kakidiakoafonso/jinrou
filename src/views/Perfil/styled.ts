import { Dimensions } from "react-native";
import styled from "styled-components/native";
import cores from "../../configs/style/colors";
const { height, width } = Dimensions.get("screen");
export const Container = styled.ImageBackground`
  /* flex: 1; */
  width: ${width + "px"};
  height: ${height + "px"};
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  background-color: ${cores.yellow};
`;
export const Content = styled.View`
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
`;

export const BorderBottomView = styled.View`
  width: 95%;
  height: 60px;
  justify-content: space-evenly;
  padding-left: 2px;
`;
export const BorderBottomViewSmall = styled.View`
  width: 45%;
  height: 60px;
  justify-content: space-evenly;
  padding-left: 2px;
`;
export const Label = styled.Text`
  color: ${cores.yellow};
  font-weight: bold;
`;
export const Text = styled.Text`
  color: ${cores.yellow};
`;

export const SmallContainer = styled.View`
  width: 95%;
  height: 60px;
  justify-content: space-between;
  padding-left: 2px;
  flex-direction: row;
`;
export const AvatarButton = styled.TouchableOpacity`
  width: 140px;
  height: 140px;
  border-radius: 5px;
  position: absolute;
  top: -150px;
`;
export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
export const Input = styled.TextInput`
  flex: 1;
`;
export const PasswordContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const ButtonAdd = styled.TouchableOpacity`
  background-color: ${cores.red};
  width: 80px;
  height: 60px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  position: absolute;
  bottom: 10%;
  right: 5%;
`;
export const ImageAdd = styled.Image`
  width: 60px;
  height: 40px;
`;
export const SubmitButtonContainer = styled.View`
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
export const EditButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10%;
  right: 5%;
  z-index: 10;
`;
export const VisibleButton = styled.TouchableOpacity`
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
