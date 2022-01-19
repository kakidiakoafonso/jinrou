import React from 'react'
import ListItem from '../../component/DetailItem/ListItemUsers'
import Header from '../../component/Header/Header'
import * as S from './styled'
const uri = "https://i.pinimg.com/736x/b9/ae/86/b9ae8625cac70903db98382d3d3492be.jpg"
export default function DetalheEvento() {
    return (
        <S.Container source={require('../../assets/img/Bg8.png')}>
            <Header/>
            <S.EventoContainer>
                <S.Image source={{uri:uri}} resizeMode='contain'/>
                <S.Titulo>Nome do vento</S.Titulo>
            </S.EventoContainer>


            <S.FlatListContainer>
                
            <S.FlatList
                showsVerticalScrollIndicator={false}
                data={[1,2,3,4,5]}
                keyExtractor={item=>String(item)}
                renderItem={()=><ListItem/>}
            />
            </S.FlatListContainer>
            <S.ButtonExport>
                <S.TextExport>EXPORTAR PDF</S.TextExport>
            </S.ButtonExport>
        </S.Container>
    )
}
