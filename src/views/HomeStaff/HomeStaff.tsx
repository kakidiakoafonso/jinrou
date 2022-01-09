import { useNavigation } from '@react-navigation/native'
import React from 'react'
import * as S from "./styled"

export default function HomeStaff() 
{
    const nav = useNavigation()
    return (
        <S.Container source={require("../../assets/img/Bg2.png")}>

        <S.Content>
            
            <S.ButtonYellow activeOpacity={0.7} onPress={()=> nav.navigate("CadastrarEvento")}>
                <S.TextoYellow>Cadastrar evento</S.TextoYellow>
            </S.ButtonYellow>

            <S.ButtonTransparent activeOpacity={0.7}>
                <S.TextoTransparent>
                     Verificar compras
                </S.TextoTransparent>
            </S.ButtonTransparent>

            <S.ButtonYellow activeOpacity={0.7}>
                <S.TextoYellow>Cadastrar apoiadores</S.TextoYellow>
            </S.ButtonYellow>

            </S.Content>
        </S.Container>
    )
}
