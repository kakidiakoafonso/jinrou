import styled from "styled-components/native";
import cores from "../../configs/style/colors";

export const Container = styled.ImageBackground`
  flex: 1;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Content = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${cores.yellow};
  font-size: 40px;
  font-weight: bold;
  margin-top: 5%;
`;
export const SubTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${cores.yellow};
`;

export const ButtonAddContainer = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const TextoYellow = styled.Text`
  width: 90%;
  font-size: 20px;
  color: ${cores.yellow};
  font-weight: bold;
  text-align: center;
  margin-top: 10%;
  margin-bottom: 10%;
`;
