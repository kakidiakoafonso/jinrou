import { useNavigation } from '@react-navigation/native'
import React from 'react'
import ButtonTrasparent from '../../component/Buttons/ButtonTrasparent'
import ButtonYellow from '../../component/Buttons/ButtonYellow'
import * as S from "./styled"

export default function Home() 
{
    const nav = useNavigation()
    return (
        <S.Container source={require("../../assets/img/Bg2.png")}>

        <S.Content>
            <S.Image source={require("../../assets/img/Perfil.png")}/>
            <ButtonYellow texto='Meu perfil'
                click={()=> nav.navigate("Perfil")}
                widht={"80%"}
            />

            <S.Image source={require("../../assets/img/CalendarioAmarelo.png")}/>
            
            <ButtonTrasparent texto='Proximos eventos'
                click={()=> nav.navigate("proximoeventos")}
                widht={"80%"}
            />

            <S.Image source={require("../../assets/img/HumanWithOk.png")}/>
            <ButtonYellow texto='Área de assinantes'
                click={()=> nav.navigate("Perfil")}
                widht={"80%"}
            />

            <S.Image source={require("../../assets/img/Perfil.png")}/>

            <ButtonTrasparent texto='Vantages de ser assinante'
                click={()=> nav.navigate("VantagensMenu")}
                widht={"80%"}
            />

            </S.Content>
        </S.Container>
    )
}
