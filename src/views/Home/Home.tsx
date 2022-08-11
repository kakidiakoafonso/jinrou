import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useSelector } from 'react-redux'
import ButtonTrasparent from '../../component/Buttons/ButtonTrasparent'
import ButtonYellow from '../../component/Buttons/ButtonYellow'
import { reducerState } from '../../redux/rootReducer'
import * as S from "./styled"

export default function Home() 
{
    const nav = useNavigation()
    const userType = useSelector<reducerState,"STAFF" | "USER" | null>(state=> state.contextReducer.user)
    
    function handleAreaAssinantes(){
        if(userType==="USER") nav.navigate("uservantagens")
        else nav.navigate("VantagensMenu")
    }
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
                click={()=> handleAreaAssinantes()}
                widht={"80%"}
            />

            <S.Image source={require("../../assets/img/Perfil.png")}/>

            <ButtonTrasparent texto='Vantages de ser assinante'
                click={()=> console.log('Clicou');
                 }
                // click={()=> nav.navigate("UserVantagens") }
                widht={"80%"}
            />

            </S.Content>
        </S.Container>
    )
}
