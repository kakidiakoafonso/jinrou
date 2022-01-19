import styled from "styled-components/native";
import cores from "../../configs/style/colors"
export const Container = styled.View`
width: 100%;
height: 60px;
background-color: ${cores.yellow};
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`;
export const Items = styled.TouchableOpacity`
width: 30%;
height: 95%;
justify-content: center;
align-items: center;
flex-direction: column;
`;
export const Icon = styled.Image`
width: 60px;
height: 30px;
`;
export const Logo = styled.Image`
width: 80px;
height: 80px;
position: absolute;
top: -40px;
`;
export const Label = styled.Text`
color: ${cores.red};
font-weight: bold;
`;