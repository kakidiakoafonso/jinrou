import React,{useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import colors from '../../configs/style/colors'
import * as S from './styled'
import { useNavigation } from '@react-navigation/native';
import { User } from '../../redux/user/user.types';


type Props =  
{
    user:User,
}
const img = "https://ovicio.com.br/wp-content/uploads/2021/03/20210315-attack-on-titan-eren_7jay-555x555.png"
export default function ListItem({user}:Props) 
{
    const nav = useNavigation()
    return (
        <S.Container activeOpacity={1}>
           
            <S.Image source={{uri:img}}/>
            <S.Contents>
                <S.TextNormal>Nome: {user.name}</S.TextNormal>
                <S.TextNormal>Estado: {user.subscriber? "SIM":"NAO"}</S.TextNormal>
                <S.TextNormal>CPF: {user.cpf}</S.TextNormal>
            </S.Contents>

        </S.Container>
    )
}
