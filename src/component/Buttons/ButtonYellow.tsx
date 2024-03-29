import React from 'react'
import * as S from './styled'

type Props = & 
{
    heigth?: string | number,
    widht?: string | number,
    texto: string,
    click?: ()=> void,
    disabled?:boolean
}
export default function ButtonYellow({texto,widht="100%",click=()=>console.log("Clicou"),disabled=false}:Props) 
{
    function handleClick() {
        click()
    }
    return (
        <S.ButtonYellow style={{width:widht}} activeOpacity={0.7} disabled={disabled}
            onPress={handleClick}>
            <S.TextoYellow>
                {texto}
            </S.TextoYellow>
        </S.ButtonYellow>
    )
}
