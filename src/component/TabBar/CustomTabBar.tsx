import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { UserContexto } from '../../context/UserContext'
import * as S from "./styled"

export default function CustomTabBar({}) 
{
    const {setuser,setstaff,user,staff} = React.useContext(UserContexto)
    
    const handleLogout = () =>
    {
        setstaff(false)
        setuser(false)            
    }

    const navigation = useNavigation()
    return (
        <S.Container>
            <S.Items onPress={handleLogout}>
                <S.Icon source={require("../../assets/img/Logout.png")}/>
                <S.Label>Logout</S.Label>
            </S.Items>
            <S.Items onPress={()=> navigation.navigate("Home")} 
            style={{justifyContent:'flex-end'}}>

                <S.Logo source={require("../../assets/img/logo-menor.png")} resizeMode='contain'/>
                {/* <S.Icon source={require("../../assets/img/Calendários.png")}/> */}
                <S.Label>Meu perfil</S.Label>
            </S.Items>
            <S.Items onPress={()=> navigation.navigate("Eventos")}>
                <S.Icon source={require("../../assets/img/Calendários.png")}/>
                <S.Label>Eventos</S.Label>
            </S.Items>
        </S.Container>
    )
}
