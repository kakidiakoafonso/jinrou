import React,{useState} from 'react'
import * as S from './styled'
import cores from "../../configs/style/colors"
import { useNavigation } from '@react-navigation/native';

export default function Vantagens() 
{
    const [modalVisibility, setmodalVisibility] = useState<boolean>(false)
    const nav = useNavigation()
    return (
        <S.Container source={require("../../assets/img/Bg4.png")}>
            <S.Header/>
            <S.Content>
                <S.Titulo>Obrigado pela compra!</S.Titulo>
                
            </S.Content>
        </S.Container>
    )
}
