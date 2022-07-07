import React, { useContext, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import {useDispatch,useSelector} from 'react-redux'
import { dispatchLogin } from "../../redux/user/user.dispatch";
import { user,staff } from "../../redux/userContext/context.action";
import * as S from "./styled"
import { reducerState } from '../../redux/rootReducer';
import { ActivityIndicator } from 'react-native';

export default function Login() 
{
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const [iStaff, setiStaff] = useState<boolean>(false)
   const dispatch = useDispatch()
   const isLoading = useSelector<reducerState,boolean>(state=> state.userReducer.loading)

   function handleLogin() {
    const FinalEmail:string = email;
    const FinalPassword:string = password;
    dispatch(dispatchLogin(FinalEmail,FinalPassword,()=>dispatch(user())));
   }
    
    return (
        <S.Container source={require("../../assets/img/Bg.png")}>
            
            <S.TopRounded>
                {/* <S.TopRoundedImage source={require("../../assets/img/YellowThing.png")}></S.TopRoundedImage> */}
                
            </S.TopRounded>

            <S.ContentContainer>

            <S.InputContainer>
                <AntDesign name="user" size={24} color="#ccc" />
                <S.Input 
                    placeholder='Email'
                    placeholderTextColor={"#ccc"}
                    value={email}
                    onChangeText={e=>setemail(e)}
                    />
            </S.InputContainer>

            <S.InputContainer>
                <AntDesign name="lock" size={24} color="#ccc" />
                <S.Input 
                    placeholder='Senha'
                    placeholderTextColor={"#ccc"}
                    value={password}
                    onChangeText={e=>setpassword(e)}
                    />
            </S.InputContainer>

            <S.ButtonEntrar activeOpacity={0.7}
            onPress={handleLogin} disabled={isLoading}>
                {
                    isLoading?
                    <ActivityIndicator size={30} color={'#000'}/>
                    :
                    <S.TextoEntrar>
                        Entrar {iStaff? "como staff":null}
                    </S.TextoEntrar>
                }
            </S.ButtonEntrar>

            <S.ButtonStaffArea activeOpacity={0.7} onPress={()=> setiStaff(prev=>!prev)}>
                <S.TextoStaff>
                    {!iStaff? "Mudar para staff": "Mudar para usuario"}
                </S.TextoStaff>
            </S.ButtonStaffArea>

            <S.TextoInfoWrapper>
                <S.TextoInfo>Não tem cadastro?</S.TextoInfo>
                <S.ButtonCadastrar activeOpacity={0.7} >
                    <S.TextoInfo>Cadastrar-se</S.TextoInfo>
                </S.ButtonCadastrar>
            </S.TextoInfoWrapper>

            </S.ContentContainer>
        </S.Container>
    )
}
