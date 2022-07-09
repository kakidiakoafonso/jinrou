import React,{useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import colors from '../../configs/style/colors'
import * as S from './styled'
import { Event, removeEvents } from '../../redux/events';
import api from '../../service/api';
import { useDispatch } from 'react-redux';
import { Alert } from '../Alert/Alert';


type Props =  
{
    checkbox?:boolean,
    event:Event,
    isStaff:boolean,
}
const img = "https://ovicio.com.br/wp-content/uploads/2021/03/20210315-attack-on-titan-eren_7jay-555x555.png"
export default function ListItem({checkbox,event,isStaff=false}:Props) 
{
    const [showModal, setshowModal] = useState<boolean>(false)
    const [message, setmessage] = useState<string>('')
    const [error, seterror] = useState<boolean>(false)
    const dispatch = useDispatch()
    function handlePress()
    {
        setchecked(prev=>!prev)
    }
    function handleDelete()
    {
        api.delete('/events/'+event.id).then(res=>{
            console.log(res);
            dispatch(removeEvents(event.id))
            setmessage("Removido com sucesso!")
            setshowModal(true)
        }).catch(err=>{
            console.log(err);
            seterror(true)
            setmessage(`
            Erro ao remover evento,
            Tente novamente mais tarde!`)
            setshowModal(true)
        })
    }
    const [checked, setchecked] = useState<boolean>(false)
    return (
        <S.Container>
            {
                isStaff?
                <Entypo name="trash" size={16} color={colors.yellow} onPress={()=>handleDelete()}/>
                :
                checkbox && <S.CheckBox activeOpacity={0.7}
                    onPress={()=> handlePress()}>
                    {checked && <Entypo name="check" size={16} color={colors.yellow} />}
                </S.CheckBox>
            }
            <S.Contents>
                <S.Titulo>{event.name}</S.Titulo>
                <S.Message>
                    {event.description}
                </S.Message>
                    <S.Date> {event.date}</S.Date>
                    {!isStaff && <S.TextNormal>Normal: R$  {event.price}</S.TextNormal>}
                    {!isStaff && <S.TextAssinante>Assinante: R$  {event.subscriber_price}</S.TextAssinante>}
            </S.Contents>
            <S.Image source={{uri:img}}/>

            <Alert visible={showModal} 
                setmodalVisibility={()=>setshowModal(prev=>!prev)}
                message={message} isError={error}
                />
        </S.Container>
    )
}
