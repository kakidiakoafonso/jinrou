import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import colors from '../../configs/style/colors'
import * as S from "./styled"

const img = "https://criticalhits.com.br/wp-content/uploads/2019/06/20190616-minato-kunai-01.jpg"
export default function Perfil() 
{
    const borda = {borderBottomColor:colors.yellow,borderBottomWidth:1}
    const nav = useNavigation()
    return (
        <S.Container source={require("../../assets/img/Bg5.png")}>
            <S.Header></S.Header>
            <S.Content>
                <S.Image source={{uri:img}}/>
                <S.Nome>Kakidiako Afonso</S.Nome>
                <S.BorderBottomView style={borda}>
                    <S.Label>RG:</S.Label>
                    <S.Text>945176405</S.Text>
                </S.BorderBottomView>
                <S.BorderBottomView style={borda}>
                    <S.Label>CPF:</S.Label>
                    <S.Text>945176405</S.Text>
                </S.BorderBottomView>

                <S.SmallContainer>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Aniversario:</S.Label>
                        <S.Text>945176405</S.Text>
                    </S.BorderBottomViewSmall>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Data de expiração:</S.Label>
                        <S.Text>945176405</S.Text>
                    </S.BorderBottomViewSmall>
                </S.SmallContainer>
            </S.Content>
        </S.Container>
    )
}
