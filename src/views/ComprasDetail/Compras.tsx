import React from 'react'
import { View, Text } from 'react-native'
import * as S from './styled'
import ListItem from '../../component/DetailItem/ListItem'
import BackComponent from '../../component/Header/BackButton'
import { FlatList } from '../Eventos/styled'

export default function Compras() {
    return (
        <S.Container source={require('../../assets/img/Bg8.png')}>
            <BackComponent/>
            <FlatList
                data={[1,2,3,4,5]}
                showsVerticalScrollIndicator={false}
                keyExtractor={item=> String(item)}
                renderItem={()=><ListItem />}
            />
        </S.Container>
    )
}
