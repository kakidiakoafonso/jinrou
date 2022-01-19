import styled from "styled-components/native"
import colors from "../../configs/style/colors";
import cores from "../../configs/style/colors"

export const Container = styled.ImageBackground`
flex: 1;
`;
export const Wrapper = styled.View`
flex: 1;
/* background-color: pink; */
align-items:center;
padding-top: 30px;
`;
export const Titulo = styled.Text`
font-weight: bold;
font-size: 40px;
color: ${colors.yellow};
`;
export const SubTitulo = styled.Text`
font-weight: bold;
font-size: 30px;
color: ${colors.yellow};
`;
export const TextMessage = styled.Text`
font-size: 12px;
color: ${colors.yellow};
width: 90%;
margin-top: 22px;
`;