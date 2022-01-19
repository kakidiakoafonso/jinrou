import React, { useContext, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import * as S from "./styled"
import { UserContexto, useUser } from '../../context/UserContext';

export default function Login() 
{
    const [isStaff, setisStaff] = useState(false)
    const {setUser} = useContext(UserContexto)
    console.log(setUser);
    
    // const handelLogin = () => 
    // {
    //     if(isStaff)
    //     {
    //         setUser({nome"Kakidiako",tipo:'user'})
    //     }
    //     else
    //     {
    //         setUser({nome"Kakidiako",tipo:'staff'})
    //     }

    // }
    return (
        <S.Container source={require("../../assets/img/Bg.png")}>
            
            <S.TopRounded>
                {/* <S.TopRoundedImage source={require("../../assets/img/YellowThing.png")}></S.TopRoundedImage> */}
                
            </S.TopRounded>

            <S.ContentContainer>

            <S.InputContainer>
                <AntDesign name="user" size={24} color="#ccc" />
                <S.Input 
                    placeholder='Usuário'
                    placeholderTextColor={"#ccc"}
                    />
            </S.InputContainer>

            <S.InputContainer>
                <AntDesign name="lock" size={24} color="#ccc" />
                <S.Input 
                    placeholder='Senha'
                    placeholderTextColor={"#ccc"}
                    />
            </S.InputContainer>

            <S.ButtonEntrar activeOpacity={0.7}>
                <S.TextoEntrar>
                    Entrar
                </S.TextoEntrar>
            </S.ButtonEntrar>

            <S.ButtonStaffArea activeOpacity={0.7}>
                <S.TextoStaff>
                    Área da staff
                </S.TextoStaff>
            </S.ButtonStaffArea>

            <S.TextoInfoWrapper>
                <S.TextoInfo>Não tem cadastro?</S.TextoInfo>
                <S.ButtonCadastrar activeOpacity={0.7}>
                    <S.TextoInfo>Cadastrar-se</S.TextoInfo>
                </S.ButtonCadastrar>
            </S.TextoInfoWrapper>

            </S.ContentContainer>
        </S.Container>
    )
}
