import React,{useState} from 'react'
import * as S from './styled'
import cores from "../../configs/style/colors"
import { useNavigation } from '@react-navigation/native';
import Header from '../../component/Header/Header';
import ButtonYellow from '../../component/Buttons/ButtonYellow';

export default function Vantagens() 
{
    const [modalVisibility, setmodalVisibility] = useState<boolean>(false)
    const nav = useNavigation()
    return (
        <S.Container source={require("../../assets/img/Bg4.png")}>
            <Header/>
            <S.Content>
                <S.Titulo>Vantagens de ser assinante</S.Titulo>
                <S.Texto>
                    Eren é um jovem de estatura e estatura medianas. 
                    Ele tem um rosto razoavelmente longo, 
                    mas arredondado, e olhos verde-azulados 
                    expressivos e expressivos
                    Eren é um jovem de estatura e estatura medianas. 
                    Ele tem um rosto razoavelmente longo, 
                    mas arredondado, e olhos verde-azulados 
                    expressivos e expressivos
                </S.Texto>
                <ButtonYellow texto='Comprar assinatura' widht={"90%"} />
            </S.Content>
        </S.Container>
    )
}
