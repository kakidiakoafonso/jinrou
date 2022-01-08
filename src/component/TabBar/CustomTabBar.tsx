import { useNavigation } from '@react-navigation/native'
import React from 'react'
import * as S from "./styled"

export default function CustomTabBar({}) 
{
    const navigation = useNavigation()
    return (
        <S.Container>
            <S.Items>
                <S.Icon source={require("../../assets/img//Logout.png")}/>
                <S.Label>Logout</S.Label>
            </S.Items>
            <S.Items onPress={()=> navigation.navigate("Home")}>
                <S.Icon source={require("../../assets/img/Calendários.png")}/>
                <S.Label>Meu perfil</S.Label>
            </S.Items>
            <S.Items onPress={()=> navigation.navigate("Eventos")}>
                <S.Icon source={require("../../assets/img/Calendários.png")}/>
                <S.Label>Eventos</S.Label>
            </S.Items>
        </S.Container>
    )
}
