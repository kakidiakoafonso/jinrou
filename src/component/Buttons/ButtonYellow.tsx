import React from 'react'
import * as S from './styled'

type Props = & 
{
    heigth?: string | number,
    widht?: string | number,
    texto: string,
    click?: ()=> void
}
export default function ButtonYellow({texto,widht="100%",click=()=>console.log("Clicou")}:Props) 
{
    return (
        <S.ButtonYellow style={{width:widht}} activeOpacity={0.7}
            onPress={()=>click()}>
            <S.TextoYellow>
                {texto}
            </S.TextoYellow>
        </S.ButtonYellow>
    )
}
