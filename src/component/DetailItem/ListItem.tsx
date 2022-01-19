import React,{useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import colors from '../../configs/style/colors'
import * as S from './styled'
import { useNavigation } from '@react-navigation/native';


type Props =  
{
    checkbox?:boolean,
    normal?:boolean,
    assinante?:boolean,
    date?:boolean,
    titulo?:string
}
const img = "https://ovicio.com.br/wp-content/uploads/2021/03/20210315-attack-on-titan-eren_7jay-555x555.png"
export default function ListItem({}:Props) 
{
    const [checked, setchecked] = useState<boolean>(false)
    const nav = useNavigation()
    return (
        <S.Container activeOpacity={0.7}
        onPress={()=> nav.navigate('EventosDetalhe')}>
           
            <S.Image source={{uri:img}}/>
            <S.Contents>
                <S.Titulo>Evento</S.Titulo>

                <S.TextNormal>Compras normais: 3</S.TextNormal>
                <S.TextNormal>Compras assinantes: 3</S.TextNormal>
            </S.Contents>

        </S.Container>
    )
}
