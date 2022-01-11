import { useNavigation } from '@react-navigation/native'
import React from 'react'
import * as S from './styled'

export default function Header() 
{
    const nav = useNavigation()
    return (
        <S.Header>
                <S.BackButton onPress={()=>nav.goBack()}>
                    <S.ImageBack source={require("../../assets/img/Flecha.png")}/>
                </S.BackButton>
        </S.Header>
    )
}
