import { useNavigation } from '@react-navigation/native'
import React from 'react'
import colors from '../../configs/style/colors'
import * as S from './styled'


const borda = 
{
    borderBottomWidth:1,
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
                    <S.Logo source={require('../../assets/img/logo-menor.png')}
                    resizeMethod='auto' resizeMode='contain'/>
                    <S.Wrapper>
                        <S.InputsContainer style={borda}>
                            <S.TextoRedBold>Evento</S.TextoRedBold>
                            <S.TextoRed>R$ 30.00</S.TextoRed>
                        </S.InputsContainer>
                        <S.InputsContainer style={borda}>
                            <S.TextoRedBold>Desconto de assinante</S.TextoRedBold>
                            <S.TextoRed>50%</S.TextoRed>
                        </S.InputsContainer>
                        <S.InputsContainer >
                            <S.TextoRedBold>Evento</S.TextoRedBold>
                            <S.TextoRedBold>R$ 15.00</S.TextoRedBold>
                        </S.InputsContainer>
                    </S.Wrapper>

                    <S.ButtonYellow activeOpacity={0.7}
                        onPress={()=> nav.navigate("Comprado")}
                        // setmodalVisibility(!visivel)
                    >
                        <S.TextoYellow>
                            Comprar R$30.00
                        </S.TextoYellow>
                    </S.ButtonYellow>
                </S.Content>
            </S.Container>
        </S.Modal>
    )
}
