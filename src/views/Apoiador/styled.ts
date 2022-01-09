import styled from "styled-components/native"
import cores from "../../configs/style/colors"

export const Container = styled.ImageBackground`
flex: 1;
align-items: center;
`;

export const Header = styled.View`
width: 100%;
height: 200px;
border-bottom-left-radius: 200px;
border-bottom-right-radius: 200px;
background-color: ${cores.yellow};
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
export const Text = styled.Text`
color: ${cores.yellow};
`;

export const SmallContainer = styled.View`
width: 95%;
height:60px;
justify-content: space-between;
padding-left: 2px;
flex-direction: row;
`;
export const Image = styled.Image`
width: 140px;
height:140px;
border-radius: 5px;
position: absolute;
top: -150px;
`;
export const Nome = styled.Text`
color: ${cores.yellow};
font-weight: bold;
font-size: 25px;
`;


