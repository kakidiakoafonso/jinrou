import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../configs/style/colors";

const width = 0.9 * Dimensions.get('screen').width
export const Modal = styled.Modal`
flex: 1;
`
export const Container = styled.View`
flex: 1;
background-color: transparent;
justify-content: flex-end;
`
export const Close = styled.Pressable`
width: 100%;
height: 50%;
`
export const Content = styled.View`
width: 100%;
height: 50%;
background-color: ${colors.yellow};
justify-content: center;
align-items:center;
padding-top: 20px;
padding-bottom: 55px;
`
export const Logo = styled.Image`
width: 130px;
height: 130px;
position: absolute;
top: -100px;
`
export const FlatListContainer = styled.View`
width: 90%;
height: 90%;
/* background-color: red; */
`
export const Wrapper = styled.View`
width: ${width +'px'};
height: 150px;
justify-content: space-between;
`
export const InputsContainer = styled.View`
width: 100%;
height: 30px;
flex-direction: row;
justify-content: space-between;
padding: 0px 5px;
`
export const TextoRedBold = styled.Text`
font-size: 16px;
color: ${colors.red};
font-weight: bold;
`
export const TextoRed = styled.Text`
font-size: 16px;
color: ${colors.red};
`


export const ButtonYellow = styled.TouchableOpacity`
width: 80%;
height:50px;
background-color: ${colors.red};
border-radius: 25px;
justify-content: center;
align-items: center;
position: absolute;
bottom: 20px;
align-self: center;
`;

export const TextoYellow = styled.Text`
font-size: 15px;
color: ${colors.yellow};
font-weight: bold;
`;

export const Separator = styled.View`
height: 1px;
width: 100%;
background-color: #ccc;
margin-bottom: 40px;
`