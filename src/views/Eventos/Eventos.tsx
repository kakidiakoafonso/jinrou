import React,{useState} from 'react'
import * as S from './styled'
import cores from "../../configs/style/colors"
import { Ionicons } from '@expo/vector-icons';
import ListItem from '../../component/Item/ListItem';
import { useNavigation } from '@react-navigation/native';
import Modal from '../../component/Modal/Modal';


export default function Eventos() 
{
    const [modalVisibility, setmodalVisibility] = useState<boolean>(false)
    const nav = useNavigation()
    return (
        <S.Container source={require("../../assets/img/Bg4.png")}>
            <S.Header>
                <S.BackIcon onPress={()=>nav.goBack()}>
                <Ionicons name="arrow-back-outline" size={44} color={cores.yellow} />
                </S.BackIcon>
            </S.Header>


            <S.FlatList
                data={[1,2,3,4,5,6,7]}
                keyExtractor={(e)=> String(e)}
                renderItem={()=><ListItem checkbox />}
                showsVerticalScrollIndicator={false}
            />

            <S.ButtonYellow activeOpacity={0.7} onPress={()=>setmodalVisibility(!modalVisibility)}>
                <S.TextoYellow>
                    Adicionar ao carrinho R$ 30.00
                </S.TextoYellow>
            </S.ButtonYellow>

            <Modal visivel={modalVisibility} 
                setmodalVisibility={()=> setmodalVisibility(!modalVisibility)}/>
        </S.Container>
    )
}
