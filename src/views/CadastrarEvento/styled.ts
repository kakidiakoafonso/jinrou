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
export const Content = styled.KeyboardAvoidingView`
width: 90%;
/* height: 70%; */
justify-content: space-between;
align-items: center;
margin-top: 50px;
/* background-color: #fff; */
`;

export const BorderBottomView = styled.View`
width: 95%;
height:55px;
justify-content: space-evenly;
padding-left: 2px;
padding-top: 10px;
margin: 3px 2px;
`;
export const BorderBottomViewSmall = styled.View`
width: 45%;
height:55px;
justify-content: space-evenly;
padding-left: 2px;
padding-top: 10px;
`;
export const Label = styled.Text`
color: ${cores.yellow};
font-weight: bold;
`;
export const Input = styled.TextInput`
color: ${cores.yellow};
font-weight: bold;
height: 40px;
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
width: 100px;
height:100px;
border-radius: 5px;
position: absolute;
top: -120px;
`;
export const Nome = styled.Text`
color: ${cores.yellow};
font-weight: bold;
font-size: 25px;
margin-bottom: 20px;
`;
export const ButtonAdd = styled.TouchableOpacity`
/* background-color: ${cores.red}; */
width: 80px;
height: 60px;
align-items: center;
justify-content: center;
align-self: flex-end;
margin-right: 15px;
`;
export const ImageAdd = styled.Image`
width: 60px;
height: 40px;
`;
export const KeyboardAvoid = styled.ScrollView`
/* background-color: #f2f2f2; */
width: 100%;
height: 100%;
padding-top: 30px;
`;



