import styled from "styled-components/native"
import cores from "../../configs/style/colors"

import { Dimensions } from "react-native";
export const Container = styled.ImageBackground`
width: ${Dimensions.get('window').width+"px"};
height: ${Dimensions.get('window').height+"px"};
align-items: center;
`;

export const Content = styled.View`
width: 90%;
height: 200px;
justify-content: space-between;
align-items: center;
margin-top: 90px;
`;

export const BorderBottomView = styled.View`
width: 95%;
height:60px;
justify-content: space-evenly;
padding-left: 2px;
`;
export const BorderBottomViewSmall = styled.View`
width: 45%;
height:60px;
justify-content: space-evenly;
padding-left: 2px;
`;
export const Label = styled.Text`
color: ${cores.yellow};
font-weight: bold;
`;
export const Text = styled.TextInput`
color: ${cores.yellow};
`;

export const SmallContainer = styled.View`
width: 95%;
height:60px;
justify-content: space-between;
padding-left: 2px;
flex-direction: row;
`;
export const ImageButton = styled.TouchableOpacity`
width: 140px;
height:140px;
border-radius: 5px;
position: absolute;
top: -150px;
`;
export const Image = styled.Image`
width: 100px;
height:100%;
`;
export const Nome = styled.Text`
color: ${cores.yellow};
font-weight: bold;
font-size: 25px;
`;
export const ButtonAdd = styled.TouchableOpacity`
background-color: transparent;
width: 60px;
height: 40px;
margin-top: 10%;
margin-right: 10%;
align-self: flex-end;
justify-content: center;
align-items: center;
`;
export const AddImage = styled.Image`
width: 100%;
height: 70%;
`;


