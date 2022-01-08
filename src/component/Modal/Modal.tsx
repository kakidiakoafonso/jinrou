import { useNavigation } from '@react-navigation/native'
import React from 'react'
import colors from '../../configs/style/colors'
import * as S from './styled'


const borda = 
{
    borderBottomWidth:2,
    borderBottomColor:colors.red,
}

type Props = 
{
    visivel: boolean,
    setmodalVisibility: (state:boolean)=> void
}
export default function Modal({visivel,setmodalVisibility}:Props) 
{
    const nav = useNavigation()
    return (
        <S.Modal transparent={true} visible={visivel}
        animationType='slide'
        >
            <S.Container>
                <S.Close  onPress={()=>setmodalVisibility(!visivel)}></S.Close>
                <S.Content>
                    <S.Wrapper>
                        <S.InputsContainer style={borda}>
                            <S.TextoRedBold>Evento</S.TextoRedBold>
                            <S.TextoRed>R$ 30.00</S.TextoRed>
                        </S.InputsContainer>
                        <S.InputsContainer style={borda}>
                            <S.TextoRedBold>Desconto de assinante</S.TextoRedBold>
                            <S.TextoRed>50%</S.TextoRed>
                        </S.InputsContainer>
                        <S.InputsContainer style={borda}>
                            <S.TextoRedBold>Evento</S.TextoRedBold>
                            <S.TextoRed>R$ 15.00</S.TextoRed>
                        </S.InputsContainer>
                    </S.Wrapper>

                    <S.ButtonYellow activeOpacity={0.7}
                        onPress={()=> nav.navigate("Comprado")}
                        // setmodalVisibility(!visivel)
                    >
                        <S.TextoYellow>
                            Comprar
                        </S.TextoYellow>
                    </S.ButtonYellow>
                </S.Content>
            </S.Container>
        </S.Modal>
    )
}
