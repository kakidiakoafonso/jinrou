import styled from "styled-components/native"
import cores from "../../configs/style/colors"

export const Container = styled.TouchableOpacity`
width: 100%;
height: 100px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
/* background-color: palegreen; */
margin: 0px 0px;
`;

export const Contents = styled.View`
width: 60%;
height: 70px;
justify-content: space-between;
`
export const Titulo = styled.Text`
color: ${cores.yellow};
font-size: 20px;
`

export const Image = styled.Image`
width: 100px;
height: 80px;
background-color: white;
border-radius: 10px;
`
export const TextNormal = styled.Text`
color: ${cores.yellow};
font-size: 14px;
`
