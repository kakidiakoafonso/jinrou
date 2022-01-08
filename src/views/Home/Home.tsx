import React from 'react'
import { View, Text } from 'react-native'
import * as S from "./styled"

export default function Home() 
{
    return (
        <S.Container source={require("../../assets/img/Bg2.png")}>

        <S.Content>
            <S.Image source={require("../../assets/img/Perfil.png")}/>
            
            <S.ButtonYellow activeOpacity={0.7}>
                <S.TextoYellow>Meu perfil</S.TextoYellow>
            </S.ButtonYellow>
            <S.Image source={require("../../assets/img/CalendarioAmarelo.png")}/>
            <S.ButtonTransparent activeOpacity={0.7}>
                <S.TextoTransparent>
                    Proximos eventos
                </S.TextoTransparent>
            </S.ButtonTransparent>

            <S.Image source={require("../../assets/img/Perfil.png")}/>
            <S.ButtonYellow activeOpacity={0.7}>
                <S.TextoYellow>Área de assinantes</S.TextoYellow>
            </S.ButtonYellow>

            <S.Image source={require("../../assets/img/Perfil.png")}/>
            <S.ButtonTransparent activeOpacity={0.7}>
                <S.TextoTransparent>
                    Vantages de ser assinante
                </S.TextoTransparent>
            </S.ButtonTransparent>

            </S.Content>
        </S.Container>
    )
}
