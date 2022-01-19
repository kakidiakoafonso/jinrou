import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../component/Header/Header'
import * as S from './styled'

export default function Index() {
    return (
        <S.Container source={require('../../assets/img/Bg2.png')}>
            <Header goTo='VantagensMenu'/>
            <S.Wrapper>
                <S.Titulo>VANTAGENS DE</S.Titulo>
                <S.SubTitulo>ser assinante</S.SubTitulo>
                <S.TextMessage>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Enim omnis nemo ea 
                    eum autem consectetur repudiandae 
                    voluptates odit, aspernatur amet 
                    provident voluptatum delectus,
                    aliquid accusamus rerum molestiae 
                    hic est ipsa.
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Enim omnis nemo ea 
                    eum autem consectetur repudiandae 
                    voluptates odit, aspernatur amet 
                    provident voluptatum delectus,
                    aliquid accusamus rerum molestiae 
                    hic est ipsa.
                </S.TextMessage>
            </S.Wrapper>
        </S.Container>
    )
}
