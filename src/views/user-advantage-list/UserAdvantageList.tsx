import { FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import * as S from './style'
import cores from "../../configs/style/colors"
import { VantagemItem } from '../../component/vantagens/VantagemItem'
import { useDispatch, useSelector } from 'react-redux'
import { reducerState } from '../../redux/rootReducer'
import { Advantage, dispatchAdvantage, getAdvantage } from '../../redux/advantage'
import { useNavigation } from '@react-navigation/native';
import { LoadingModal } from '../../component/Loading/Loading';

export default function UserAdvantageList() 
{
    const nav = useNavigation()
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(dispatchAdvantage(getAdvantage()))
        console.log('fetch advantage');
        
    },[])
    const isLoading = useSelector<reducerState,boolean>(state=> state.advantageReducer.loading)
    const advantages = useSelector<reducerState,Advantage[]>(state=> state.advantageReducer.advantages)
    console.log(advantages);
    
  return (
    <S.Container source={require("../../assets/img/Bg4.png")}>
        <S.Header>
                <S.BackIcon onPress={()=>nav.goBack()}>
                <Ionicons name="arrow-back-outline" size={44} color={cores.yellow} />
                </S.BackIcon>
        </S.Header>
        <S.FlatContainer>
        <FlatList
                data={advantages}
                keyExtractor={(e)=> String(e.id)}
                renderItem={({item})=><VantagemItem advantage={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </S.FlatContainer>
        <LoadingModal visible={isLoading}/>
    </S.Container>
    
  )
}