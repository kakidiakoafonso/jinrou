import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import colors from "../../configs/style/colors";
import { reducerState } from "../../redux/rootReducer";
import { User } from "../../redux/user/user.types";
import { Ionicons } from "@expo/vector-icons";
import cores from "../../configs/style/colors";
import * as S from "./styled";

const img =
  "https://criticalhits.com.br/wp-content/uploads/2019/06/20190616-minato-kunai-01.jpg";
export default function Perfil() {
  const user = useSelector<reducerState, User>(
    (state) => state.userReducer.user
  );
  const isSubscribed = useSelector<reducerState, boolean>(
    (state) => state.userReducer.user.subscriber
  );
  const borda = { borderBottomColor: colors.yellow, borderBottomWidth: 1 };
  const nav = useNavigation();
  return (
    <S.Container source={require("../../assets/img/Bg5.png")}>
      <S.Header>
        <S.BackIcon onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back-outline" size={44} color={cores.yellow} />
        </S.BackIcon>
      </S.Header>
      <S.Content>
        <S.Image source={{ uri: img }} />
        <S.Nome>{user.name}</S.Nome>
        <S.BorderBottomView style={borda}>
          <S.Label>RG:</S.Label>
          <S.Text>{user.rg}</S.Text>
        </S.BorderBottomView>
        <S.BorderBottomView style={borda}>
          <S.Label>CPF:</S.Label>
          <S.Text>{user.cpf}</S.Text>
        </S.BorderBottomView>

        <S.SmallContainer>
          <S.BorderBottomViewSmall style={borda}>
            <S.Label>Aniversario:</S.Label>
            <S.Text>{user.birth_day}</S.Text>
          </S.BorderBottomViewSmall>
          <S.BorderBottomViewSmall style={borda}>
            <S.Label>Assinatura:</S.Label>
            <S.Text>
              {" "}
              {isSubscribed ? user.expiration_date : "Não é assinante"}
            </S.Text>
          </S.BorderBottomViewSmall>
        </S.SmallContainer>
      </S.Content>
    </S.Container>
  );
}
