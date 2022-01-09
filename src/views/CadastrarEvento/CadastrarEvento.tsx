import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import colors from '../../configs/style/colors'
import * as S from "./styled"

const img = "https://criticalhits.com.br/wp-content/uploads/2019/06/20190616-minato-kunai-01.jpg"
export default function CadastrarEvento() 
{
    const borda = {borderBottomColor:colors.yellow,borderBottomWidth:1}
    const nav = useNavigation()
    return (
        <S.Container source={require("../../assets/img/Bg5.png")}>
            <S.Header></S.Header>
            <S.Content>
                <S.Image source={{uri:img}}/>
                <S.Nome>Nome do evento</S.Nome>
                <S.BorderBottomView style={borda}>
                    <S.Label>Nome do evento</S.Label>
                    <S.Input />
                </S.BorderBottomView>
                <S.BorderBottomView style={borda}>
                    <S.Label>Descricao</S.Label>
                    <S.Input multiline/>
                </S.BorderBottomView>
                

                <S.SmallContainer>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Data do evento:</S.Label>
                        <S.Input />
                    </S.BorderBottomViewSmall>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Preço do ingresso </S.Label>
                        <S.Input />
                    </S.BorderBottomViewSmall>
                </S.SmallContainer>
                <S.SmallContainer>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Aniversario:</S.Label>
                        <S.Input />
                    </S.BorderBottomViewSmall>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Data de expiração:</S.Label>
                        <S.Input />
                    </S.BorderBottomViewSmall>
                </S.SmallContainer>
            </S.Content>
        </S.Container>
    )
}
