import styled from "styled-components/native"
import cores from "../../configs/style/colors"

export const Container = styled.ImageBackground`
flex: 1;
/* justify-content: center; */
/* align-items: center; */
`;

export const Header = styled.View`
width: 100%;
height: 50px;
margin-top: 30px;
padding-left: 8px;
`
export const BackIcon = styled.TouchableOpacity`
width: 100px;
height: 50px;
`
export const FlatList = styled.FlatList`
width: 90%;
align-self: center;
`


export const ButtonAddContainer = styled.View`
position: absolute;
bottom: 20px;
align-self: center;
justify-content: center;
align-items: center;
width: 80%;
`;

export const TextoYellow = styled.Text`
font-size: 15px;
color: ${cores.red};
font-weight: bold;
`;