import styled from "styled-components/native"
import cores from "../../configs/style/colors"

export const Header = styled.View`
width: 100%;
height: 200px;
background-color: ${cores.yellow};
border-bottom-left-radius: 250px;
border-bottom-right-radius: 250px;
`
export const BackButton = styled.TouchableOpacity`
position: absolute;
top: 30px;
left: 4px;
`;

export const ImageBack = styled.Image`
width: 50px;
height:50px;
`;


