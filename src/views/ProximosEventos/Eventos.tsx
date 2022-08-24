import React, { useState } from "react";
import * as S from "./styled";
import cores from "../../configs/style/colors";
import { Ionicons } from "@expo/vector-icons";
import ListItem from "../../component/Item/ListItem";
import { useNavigation } from "@react-navigation/native";
import Modal from "../../component/Modal/Modal";
import ButtonYellow from "../../component/Buttons/ButtonYellow";
import { useSelector } from "react-redux";
import { reducerState } from "../../redux/rootReducer";
import { useGetEvents } from "../../hooks/events";

export default function ProximosEventos() {
  const [modalVisibility, setmodalVisibility] = useState<boolean>(false);
  const [totalPrice, settotalPrice] = useState<number>(0);
  const { data: events, isLoading } = useGetEvents();
  const cart = useSelector<reducerState, Evento[]>(
    (state) => state.cartReducer
  );
  const isSubscriber = useSelector<reducerState, boolean>(
    (state) => state.userReducer.user.subscriber
  );
  React.useEffect(() => {
    if (cart.length !== 0) {
      let price: number = 0;
      cart.forEach((event) => {
        if (isSubscriber) price += Number(event.subscriber_price);
        else price += Number(event.price);
      });
      settotalPrice(price);
    } else settotalPrice(0);
  }, [cart]);

  const nav = useNavigation();
  return (
    <S.Container source={require("../../assets/img/Bg4.png")}>
      <S.Header>
        <S.BackIcon onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back-outline" size={44} color={cores.yellow} />
        </S.BackIcon>
      </S.Header>

      <S.FlatList
        data={events}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }: { item: Evento }) => <ListItem event={item} />}
        showsVerticalScrollIndicator={false}
      />

      <S.ButtonAddContainer>
        <ButtonYellow
          texto={
            cart.length == 0
              ? "Carrinho vazio"
              : `Adicionar ao carrinho R$ ${totalPrice}`
          }
          click={() => setmodalVisibility(!modalVisibility)}
          disabled={cart.length == 0}
        />
      </S.ButtonAddContainer>

      <Modal
        visivel={modalVisibility}
        setmodalVisibility={() => setmodalVisibility(!modalVisibility)}
        total={totalPrice}
      />
    </S.Container>
  );
}
