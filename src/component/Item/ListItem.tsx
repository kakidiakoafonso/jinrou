import React,{useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import colors from '../../configs/style/colors'
import * as S from './styled'


type Props =  
{
    checkbox?:boolean,
    normal?:boolean,
    assinante?:boolean,
    date?:boolean,
    titulo?:string
}
const img = "https://ovicio.com.br/wp-content/uploads/2021/03/20210315-attack-on-titan-eren_7jay-555x555.png"
export default function ListItem({checkbox,normal,assinante,date,titulo}:Props) 
{
    const [checked, setchecked] = useState<boolean>(false)
    return (
        <S.Container>
            {
                checkbox && <S.CheckBox activeOpacity={0.7}
                    onPress={()=> setchecked(!checked)}>
                    {checked && <Entypo name="check" size={16} color={colors.yellow} />}
                </S.CheckBox>
            }
            <S.Contents>
                <S.Titulo>{titulo? titulo:'Evento'}</S.Titulo>
                <S.Message>
                    No arquivo de index vamos fazer a estrutura 
                    do componente. Para isso vamos definir uma 
                    interface que estende as propriedades do 
                    TouchableOpacity e adiciona mais três propriedades: 
                    isDisable (Opcional), color(obrigatória) e children 
                    (obrigatória).
                </S.Message>
                
                {
                    date && <S.Date>12/12/2022</S.Date>
                }
                {
                    normal && <S.TextNormal>Normal: R$ 30.00</S.TextNormal>
                }
                {
                    assinante && <S.TextAssinante>Assinante: R$ 30.00</S.TextAssinante>
                }
            </S.Contents>
            <S.Image source={{uri:img}}/>


        </S.Container>
    )
}
