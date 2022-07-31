import { BackIcon } from '../../views/Eventos/styled';
import styled from "styled-components/native";

export const Modal = styled.Modal``
export const Container = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const Content = styled.View`
justify-content: space-evenly;
align-items: center;
width:80%;
height:150px;
border-radius:3px;
`
export const ContentTop = styled.View`
flex-direction:row ;
align-items:center ;
width:90%;
`
export const Icon = styled.View`
margin-right:15px ;
`
export const Title = styled.Text`
font-size:20px;
color:#fff ;
`
export const Message = styled.Text`
font-size:14px;
width:90% ;
height: 40% ;
color:#fff ;
`
export const ButtonContainer = styled.View`
width:90% ;
align-items:flex-end ;
`
export const Button = styled.TouchableOpacity`
width:120px;
height: 35px;
background-color:#fff ;
align-items:center ;
justify-content:center ;
border-radius:3px ;
`
export const ButtonText = styled.Text`
font-size:14px;
color:#000 ;
font-size:18px ;
font-weight:bold ;
`