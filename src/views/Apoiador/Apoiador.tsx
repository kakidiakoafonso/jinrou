import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../component/Header/Header'
import colors from '../../configs/style/colors'
import * as S from "./styled"

const img = "https://criticalhits.com.br/wp-content/uploads/2019/06/20190616-minato-kunai-01.jpg"
export default function Apoiador() 
{
    const borda = {borderBottomColor:colors.yellow,borderBottomWidth:1}
    const nav = useNavigation()
    return (
        <S.Container source={require("../../assets/img/Bg5.png")}>
            <Header/>
            <S.Content>
                <S.Image source={{uri:img}}/>
                <S.Nome>Nome apoiador</S.Nome>
                <S.BorderBottomView style={borda}>
                    <S.Label>Nome apoiador:</S.Label>
                    <S.Text placeholder='Nome apoiador' placeholderTextColor={colors.yellow}/>
                </S.BorderBottomView>
                <S.BorderBottomView style={borda}>
                    <S.Label>Descrição:</S.Label>
                    <S.Text placeholder='Descrição' placeholderTextColor={colors.yellow}/>
                </S.BorderBottomView>

                <S.SmallContainer>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Validade:</S.Label>
                        <S.Text placeholder='Validade' placeholderTextColor={colors.yellow}/>
                    </S.BorderBottomViewSmall>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Desconto assinante:</S.Label>
                        <S.Text placeholder='Desconto em %' placeholderTextColor={colors.yellow}/>
                    </S.BorderBottomViewSmall>
                </S.SmallContainer>
            </S.Content>
            <S.ButtonAdd>
                <S.AddImage source={require('../../assets/img/Add.png')}/>
            </S.ButtonAdd>
        </S.Container>
    )
}
