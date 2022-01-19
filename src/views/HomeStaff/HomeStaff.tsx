import { useNavigation } from '@react-navigation/native'
import React from 'react'
import  ButtonTransparent  from '../../component/Buttons/ButtonTrasparent'
import  ButtonYellow  from '../../component/Buttons/ButtonYellow'
import * as S from "./styled"

export default function HomeStaff() 
{
    const nav = useNavigation()
    return (
        <S.Container source={require("../../assets/img/Bg2.png")}>

        <S.Content>

            <ButtonYellow texto='Cadastrar evento' widht={"80%"} 
                widht={"80%"}
                click={()=> nav.navigate("CadastrarEvento")}/>

            <ButtonTransparent texto='Verificar compras' widht={"80%"}
                 click={()=> nav.navigate("Compras")}
            />

            <ButtonYellow texto='Cadastrar apoiadores' widht={"80%"}
            click={()=>nav.navigate("Apoiador")}/>
            </S.Content>
        </S.Container>
    )
}
