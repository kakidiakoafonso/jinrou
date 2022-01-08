import React,{useState} from 'react'
import colors from '../../configs/style/colors'
import * as S from './styled'


type Props =  
{
    checkbox?:boolean
}
const img = "https://ovicio.com.br/wp-content/uploads/2021/03/20210315-attack-on-titan-eren_7jay-555x555.png"
export default function ListItem({checkbox}:Props) 
{
    const [checked, setchecked] = useState<boolean>(false)
    return (
        <S.Container>
            {
                checkbox && <S.CheckBox activeOpacity={0.7}
                    onPress={()=> setchecked(!checked)}
                    style={{backgroundColor:checked?colors.yellow:"transparent"}}
                />
            }
            <S.Contents>
                <S.Titulo>Evento</S.Titulo>
                <S.Message>
                    No arquivo de index vamos fazer a estrutura 
                    do componente. Para isso vamos definir uma 
                    interface que estende as propriedades do 
                    TouchableOpacity e adiciona mais três propriedades: 
                    isDisable (Opcional), color(obrigatória) e children 
                    (obrigatória).
                </S.Message>
                <S.Date>12/12/2022</S.Date>
            </S.Contents>
            <S.Image source={{uri:img}}/>
        </S.Container>
    )
}
