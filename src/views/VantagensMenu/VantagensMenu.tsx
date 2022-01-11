import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import ButtonTrasparent from '../../component/Buttons/ButtonTrasparent'
import ButtonYellow from '../../component/Buttons/ButtonYellow'
import Header from '../../component/Header/Header'
import * as S from './styled'

export default function VantagensMenu() 
{
    const nav = useNavigation()
    return (
        <S.Container source={require("../../assets/img/Bg5.png")}>
            <Header/>

            <S.Content>

                <ButtonYellow texto='Adicionar vantagens'/>

                <ButtonTrasparent  texto='Ver vantagens' 
                    click={()=>nav.navigate("Vantagens")}/>

            </S.Content>
        </S.Container>
    )
}
