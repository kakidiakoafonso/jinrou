import styled from "styled-components/native"
import cores from "../../configs/style/colors"

export const Container = styled.ImageBackground`
flex: 1;
`;


export const Content = styled.View`
width: 100%;
height: 50%;
justify-content: center;
align-items: center;
justify-content: space-between;
margin-top: 15px;
`

export const Titulo = styled.Text`
font-size: 30px;
color: ${cores.yellow};
font-weight: bold;
width: 220px;
text-align: center;
`;



export const ButtonYellow = styled.TouchableOpacity`
width: 80%;
height:50px;
background-color: ${cores.yellow};
border-radius: 25px;
justify-content: center;
align-items: center;
`;

export const TextoYellow = styled.Text`
font-size: 18px;
color: ${cores.red};
font-weight: bold;
`;
export const Texto = styled.Text`
font-size: 14px;
color: ${cores.yellow};
font-weight: bold;
width: 80%;
`;