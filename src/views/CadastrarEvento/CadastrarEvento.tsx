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
import * as ImagePicker from 'expo-image-picker';

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
    const [subscriber_price, setSubscriber_price] = useState<string>('')
    const [price, setprice] = useState<string>('')
    const [local, setLocal] = useState<string>('')

    const [showModal, setShowModal] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [error , setError] = useState<boolean>(false)

    const [image, setImage] = useState<string>(img);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
        if (!result.cancelled && result.type=='image') 
        {
        result.type
        setImage(result.uri);
        }
    };
    async function handleCreateEvent()
    {
        const newEvent = new FormData();
        newEvent.append('file', {
            name: new Date() + '_profile',
            uri:image,
            type:'image'
        })

        newEvent.append('name',name)
        newEvent.append('date',date)
        newEvent.append('price',price)
        newEvent.append('local',local)
        newEvent.append('description',description)
        newEvent.append('subscriber_price',subscriber_price)
        setIsloading(true)
        api.post('/events', newEvent,{
            headers:{
                Accept:'application/json', 
                "Content-Type": "multipart/form-data",
            }
        }).then(response => {
            setIsloading(false)
            console.log(response)
            dispatch(dispatchEvents())
            setError(false)
            setMessage('Evento criado com sucesso')
            setShowModal(true)
            setLocal('')
            setdate('')
            setdescription('')
            setprice('')
            setSubscriber_price('')
            setname('')
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
            
                <S.ImageButton onPress={pickImage}>
                    <S.Image source={{uri:image}}/>
                </S.ImageButton>
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
                        <S.Label>Local </S.Label>
                        <S.Input value={local} onChangeText={e=>setLocal(e)}/>
                    </S.BorderBottomViewSmall>
                </S.SmallContainer>
                <S.SmallContainer>
                    
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Preço do ingresso </S.Label>
                        <S.Input value={price} onChangeText={e=>setprice(e)}/>
                    </S.BorderBottomViewSmall>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Preço assinante </S.Label>
                        <S.Input value={subscriber_price} onChangeText={e=>setSubscriber_price(e)}/>
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
