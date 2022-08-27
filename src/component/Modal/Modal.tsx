import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import colors from '../../configs/style/colors'
import { Event } from '../../redux/events'
import { reducerState } from '../../redux/rootReducer'
import * as S from './styled'


const borda = 
{
    borderBottomWidth:1,
    borderBottomColor:colors.red,
}

type Props = 
{
    visivel: boolean,
    setmodalVisibility: (state:boolean)=> void,
    total:number
}
export default function Modal({visivel,setmodalVisibility,total}:Props) 
{
    const nav = useNavigation()
    const cart = useSelector<reducerState,Event[]>(state=>state.cartReducer)
    
    return (
        <S.Modal transparent={true} visible={visivel}
        animationType='slide'
        >
            <S.Container>
                <S.Close  onPress={()=>setmodalVisibility(!visivel)}></S.Close>
                <S.Content>
                    <S.Logo source={require('../../assets/img/logo-menor.png')}
                    resizeMethod='auto' resizeMode='contain'/>
                    <S.FlatListContainer>
                        <FlatList
                            data={cart}
                            keyExtractor={e=>String(e.id)}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            pagingEnabled
                            renderItem={({item})=>(
                                <S.Wrapper>
                                    <S.InputsContainer style={borda}>
                                        <S.TextoRedBold>Evento</S.TextoRedBold>
                                        <S.TextoRed>{item.name}</S.TextoRed>
                                    </S.InputsContainer>
                                    <S.InputsContainer style={borda}>
                                        <S.TextoRedBold>Preço</S.TextoRedBold>
                                        <S.TextoRed>{item.price}</S.TextoRed>
                                    </S.InputsContainer>
                                    <S.InputsContainer style={borda}>
                                        <S.TextoRedBold>Preço de assinante</S.TextoRedBold>
                                        <S.TextoRed>{item.subscriber_price}</S.TextoRed>
                                    </S.InputsContainer>

                                </S.Wrapper>
                            )}
                        />
                    </S.FlatListContainer>

                    <S.ButtonYellow activeOpacity={0.7}
                        onPress={()=> nav.navigate("Comprado")}
                        // setmodalVisibility(!visivel)
                    >
                        <S.TextoYellow>
                            Comprar R$ {total}
                        </S.TextoYellow>
                    </S.ButtonYellow>
                </S.Content>
            </S.Container>
        </S.Modal>
    )
}
