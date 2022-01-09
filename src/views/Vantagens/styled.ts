import styled from "styled-components/native"
import cores from "../../configs/style/colors"

export const Container = styled.ImageBackground`
flex: 1;
/* justify-content: center; */
/* align-items: center; */
`;

export const Header = styled.View`
width: 100%;
height: 200px;
background-color: ${cores.yellow};
border-bottom-left-radius: 250px;
border-bottom-right-radius: 250px;
`
export const Content = styled.View`
width: 100%;
height: 50%;
justify-content: center;
align-items: center;
justify-content: space-between;

/* background-color: pink; */
`

export const Titulo = styled.Text`
font-size: 30px;
color: ${cores.yellow};
font-weight: bold;
width: 220px;
text-align: center;
`;
export const Image = styled.Image`
width: 220px;
height: 220px;
`;