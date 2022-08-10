import styled from "styled-components/native"
import cores from "../../configs/style/colors"

export const Container = styled.View`
width: 100%;
height: 150px;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 20px 0px;
`;

export const Contents = styled.View`
width: 60%;
height: 100%;
justify-content: space-between;
`
export const Titulo = styled.Text`
color: ${cores.yellow};
font-size: 18px;
font-weight: bold;
margin-bottom: 3px;
`
export const Message = styled.Text`
color: ${cores.yellow};
flex: 1;
overflow: hidden;
`
export const Date = styled.Text`
color: ${cores.yellow};
font-size: 13px;
font-weight: bold;
/* margin-top: 3px; */
`
export const Image = styled.Image`
width: 30%;
height: 80%;
background-color: white;
border-radius: 10px;
`
export const CheckBox = styled.TouchableOpacity`
width: 20px;
height: 20px;
border-radius: 20px;
background-color: transparent;
border: 1px solid ${cores.yellow};
border-radius: 10px;
justify-content: center;
align-items: center;
`

export const TextNormal = styled.Text`
color: ${cores.yellow};
font-size: 13px;
font-weight: bold;
margin-top: 10px;
`
export const TextAssinante = styled.Text`
color: ${cores.yellow};
font-size: 13px;
font-weight: bold;
margin-top: 3px;
`