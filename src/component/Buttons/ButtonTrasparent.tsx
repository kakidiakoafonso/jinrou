import React from 'react'
import * as S from './styled'

type Props = & 
{
    heigth?: string | number,
    widht?: string | number,
    texto: string,
    click?: ()=> void
}
export default function ButtonTrasparent({texto,widht="100%",click=()=>console.log("Clicou")}:Props) 
{
    return (
        <S.ButtonTransparent style={{width:widht}} activeOpacity={0.7}
        onPress={()=>click()}>
            <S.TextoTransparent>
                {texto}
            </S.TextoTransparent>
        </S.ButtonTransparent>
    )
}
