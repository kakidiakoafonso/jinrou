import React,{useContext, useEffect, useState} from 'react'
import * as S from './styled'
import cores from "../../configs/style/colors"
import { Ionicons } from '@expo/vector-icons';
import ListItem from '../../component/Item/ListItem';
import { useNavigation } from '@react-navigation/native';
import Modal from '../../component/Modal/Modal';
import ButtonYellow from '../../component/Buttons/ButtonYellow';
import { useDispatch, useSelector } from 'react-redux';
import { reducerState } from '../../redux/rootReducer';
import { Event,dispatchEvents } from '../../redux/events';
import { UserContexto } from '../../context/UserContext';


export default function Eventos() 
{
    const [modalVisibility, setmodalVisibility] = useState<boolean>(false)
    const nav = useNavigation()
    const dispatch = useDispatch()
    const events = useSelector<reducerState,Event[]>(state=> state.eventReducer.event)
    const isloading = useSelector<reducerState,boolean>(state=> state.eventReducer.loading)
    const {staff}:{staff:boolean} = useContext(UserContexto)
    console.log(events);
    useEffect(()=>{
        dispatch(dispatchEvents())
    },[])
    return (
        <S.Container source={require("../../assets/img/Bg4.png")}>
            <S.Header>
                <S.BackIcon onPress={()=>nav.goBack()}>
                <Ionicons name="arrow-back-outline" size={44} color={cores.yellow} />
                </S.BackIcon>
            </S.Header>


            <S.FlatList
                data={events}
                keyExtractor={(e)=> String(e.id)}
                renderItem={({item}:{item:Event})=><ListItem checkbox event={item} isStaff={staff}/>}
                showsVerticalScrollIndicator={false}
            />

            
            {/* <S.ButtonAddContainer>

                <ButtonYellow texto='Adicionar ao carrinho R$ 30.00'
                    click={()=>setmodalVisibility(!modalVisibility)}
                />
            </S.ButtonAddContainer> */}

            <Modal visivel={modalVisibility} 
                setmodalVisibility={()=> setmodalVisibility(!modalVisibility)}/>
        </S.Container>
    )
}
