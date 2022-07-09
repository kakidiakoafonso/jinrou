import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'
import { ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'
import { Alert } from '../../component/Alert/Alert'
import Header from '../../component/Header/Header'
import KeyBoardAvoidWrapper from '../../component/KeyBoardAvoidWrapper'
import colors from '../../configs/style/colors'
import { dispatchEvents } from '../../redux/events'
import api from '../../service/api'
import * as S from "./styled"

const img = "https://criticalhits.com.br/wp-content/uploads/2019/06/20190616-minato-kunai-01.jpg"
export default function CadastrarEvento() 
{
    const borda = {borderBottomColor:colors.yellow,borderBottomWidth:1}
    const [scrollable, setscrollable] = useState<boolean>(false)
    const nav = useNavigation()
    const dispatch = useDispatch()

    const [isloading, setIsloading] = useState<boolean>(false)
    const [name, setname] = useState<string>('')
    const [description, setdescription] = useState<string>('')
    const [date, setdate] = useState<string>('')
    const [expirationDate, setexpirationDate] = useState<string>('')
    const [price, setprice] = useState<string>('')
    const [subcriberPrice, setsubcriberPrice] = useState<string>('')

    const [showModal, setShowModal] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [error , setError] = useState<boolean>(false)


    async function handleCreateEvent()
    {
        // const newEvent = FormData();
        // newEvent.append('name', name)
        // newEvent.append('description', description)
        // newEvent.append('date', date)
        // // newEvent.append('expirationDate', expirationDate)
        // newEvent.append('price', price)
        // newEvent.append('subscriber_price', subcriberPrice)
        // newEvent.append('local', 'local')
        // const response = await api.post('/events',{newEvent},
        // {
        //     headers: {"Content-Type": "multipart/form-data"}
        // })
        // console.log(name,description,date,expirationDate,price,subcriberPrice)
        setIsloading(true)
        api.post('/events',{
            name, description, date, 
            price, subscriber_price: subcriberPrice, local: 'local ainda nao definido'
        }).then(response => {
            setIsloading(false)
            console.log(response)
            dispatch(dispatchEvents())
            setMessage('Evento criado com sucesso')
            setShowModal(true)
        }).catch(error => {
            console.log(error);
            setIsloading(false)
            setError(true)
            setMessage('Erro ao criar evento')
            
        })
    }

    return (
        <KeyBoardAvoidWrapper>
        <S.Container source={require("../../assets/img/Bg5.png")}>
           <Header/>
            <S.Content >
            
                <S.Image source={{uri:img}}/>
                <S.Nome>Detalhes do evento</S.Nome>

                <S.KeyboardAvoid showsVerticalScrollIndicator={false}
                // scrollEnabled={true}
                >
                    
                <S.BorderBottomView style={borda}>
                    <S.Label>Nome do evento</S.Label>
                    <S.Input value={name} onChangeText={e=>setname(e)}/>
                </S.BorderBottomView>
                <S.BorderBottomView style={borda}>
                    <S.Label>Descricao</S.Label>
                    <S.Input multiline value={description} onChangeText={e=>setdescription(e)}/>
                </S.BorderBottomView>
                

                <S.SmallContainer>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Data do evento:</S.Label>
                        <S.Input value={date} onChangeText={e=>setdate(e)}/>
                    </S.BorderBottomViewSmall>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Preço do ingresso </S.Label>
                        <S.Input value={price} onChangeText={e=>setprice(e)}/>
                    </S.BorderBottomViewSmall>
                </S.SmallContainer>
                <S.SmallContainer>
                    {/* <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Aniversario:</S.Label>
                        <S.Input />
                    </S.BorderBottomViewSmall> */}
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Data de expiração:</S.Label>
                        <S.Input value={expirationDate} onChangeText={e=>setexpirationDate(e)}/>
                    </S.BorderBottomViewSmall>
                </S.SmallContainer>
                
                <S.ButtonAdd onPress={()=>handleCreateEvent()} disabled={isloading}>
                    {
                    isloading?
                    <ActivityIndicator size="small" color={colors.yellow}/>
                    :
                    <S.ImageAdd source={require("../../assets/img/Add.png")}/>
                    }
                </S.ButtonAdd>
                </S.KeyboardAvoid>
            </S.Content>
            <Alert message={message} visible={showModal} 
                setmodalVisibility={()=> setShowModal(false)} 
                isError={error}  />
        </S.Container>
        </KeyBoardAvoidWrapper>
    )
}
