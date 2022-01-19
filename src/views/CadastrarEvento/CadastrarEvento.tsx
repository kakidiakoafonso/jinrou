import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'
import Header from '../../component/Header/Header'
import colors from '../../configs/style/colors'
import * as S from "./styled"

const img = "https://criticalhits.com.br/wp-content/uploads/2019/06/20190616-minato-kunai-01.jpg"
export default function CadastrarEvento() 
{
    const borda = {borderBottomColor:colors.yellow,borderBottomWidth:1}
    const [scrollable, setscrollable] = useState<boolean>(false)
    const nav = useNavigation()
    return (
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
                    <S.Input />
                </S.BorderBottomView>
                <S.BorderBottomView style={borda}>
                    <S.Label>Descricao</S.Label>
                    <S.Input multiline/>
                </S.BorderBottomView>
                

                <S.SmallContainer>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Data do evento:</S.Label>
                        <S.Input />
                    </S.BorderBottomViewSmall>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Preço do ingresso </S.Label>
                        <S.Input />
                    </S.BorderBottomViewSmall>
                </S.SmallContainer>
                <S.SmallContainer>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Aniversario:</S.Label>
                        <S.Input />
                    </S.BorderBottomViewSmall>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Data de expiração:</S.Label>
                        <S.Input />
                    </S.BorderBottomViewSmall>
                </S.SmallContainer>
                
                <S.ButtonAdd>
                    <S.ImageAdd source={require("../../assets/img/Add.png")}/>
                </S.ButtonAdd>
                </S.KeyboardAvoid>
            </S.Content>
        </S.Container>
    )
}
