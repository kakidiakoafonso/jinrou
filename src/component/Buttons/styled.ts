import styled from "styled-components/native"
import cores from "../../configs/style/colors"


export const ButtonYellow = styled.TouchableOpacity`
height:50px;
background-color: ${cores.yellow};
border-radius: 25px;
justify-content: center;
align-items: center;
`;


export const ButtonTransparent = styled.TouchableOpacity`
height:50px;
background-color: transparent;
border: 1px solid ${cores.yellow};
border-radius: 25px;
justify-content: center;
align-items: center;
margin-bottom: 5px;
`;

export const TextoYellow = styled.Text`
font-size: 18px;
color: ${cores.red};
font-weight: bold;
`;
export const TextoTransparent = styled.Text`
font-size: 18px;
color: ${cores.yellow};
font-weight: bold;
`;