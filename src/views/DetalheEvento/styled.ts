import styled from "styled-components/native"
import colors from "../../configs/style/colors";
import cores from "../../configs/style/colors"

export const Container = styled.ImageBackground`
flex: 1;
align-items: center;
`;
export const EventoContainer = styled.View`
width: 250px;
height: 130px;
/* background-color: #fff; */
position: absolute;
top: 140px;
align-items: center;
justify-content: space-between;
`;
export const Image = styled.Image`
width: 60%;
height: 80%;
align-items: center;
border-radius: 10px;
`;
export const Titulo = styled.Text`
color: ${colors.yellow};
font-size: 22px;
font-weight: bold;
`;
export const FlatListContainer = styled.View`
width: 80%;
height: 45%;
margin-top: 80px;
padding-bottom: 20px;
`;
export const FlatList = styled.FlatList``;
export const ButtonExport = styled.TouchableOpacity`
background-color:transparent;
width: 110px;
height: 30px;
justify-content: center;
align-items: center;
align-self: flex-end;
margin-right: 13%;
`
export const TextExport = styled.Text`
color:${colors.yellow};
font-weight: bold;
font-size: 12px;
`