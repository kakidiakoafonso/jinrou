import { useNavigation } from '@react-navigation/native'
import React from 'react'
import * as S from './styled'

type Props = {
    goTo?:string
}
export default function Header({goTo}:Props) 
{
    const nav = useNavigation()
    return (
        <S.HeaderBack>
                <S.BackButton onPress={()=> goTo? nav.navigate(goTo):nav.goBack()}>
                    <S.ImageBack source={require("../../assets/img/Flecha.png")}/>
                </S.BackButton>
        </S.HeaderBack>
    )
}
