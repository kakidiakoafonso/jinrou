import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "../../configs/style/colors";
import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "../Alert/Alert";
import { cartAdd, cartRemove } from "../../redux/cart";
import { reducerState } from "../../redux/rootReducer";
import { useDeleteEvent } from "../../hooks";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  event: Evento;
};
const img =
  "https://ovicio.com.br/wp-content/uploads/2021/03/20210315-attack-on-titan-eren_7jay-555x555.png";
export default function ListItem({ event }: Props) {
  const [showModal, setshowModal] = useState<boolean>(false);
  const [message, setmessage] = useState<string>("");
  const [checked, setchecked] = useState<boolean>(false);
  const user = useSelector<reducerState, UserType>(
    (state) => state.userReducer.type
  );
  const isStaff: boolean = user === "STAFF";
  const dispatch = useDispatch();
  const queryCliente = useQueryClient();
  const { mutate, isLoading, isError } = useDeleteEvent();
  function handlePress() {
    if (checked) {
      dispatch(cartRemove(event));
      setchecked((prev) => !prev);
    } else {
      dispatch(cartAdd(event));
      setchecked((prev) => !prev);
    }
  }

  function handleDelete() {
    mutate(event.id, {
      onSuccess: () => {
        queryCliente.invalidateQueries("getEvents");
        setmessage("Removido com sucesso!");
        setshowModal(true);
      },
      onError(error, variables, context) {
        setmessage(`
            Erro ao remover evento,
            Tente novamente mais tarde!`);
        setshowModal(true);
        console.log(error);
      },
    });
  }
  return (
    <S.Container>
      {isStaff ? (
        <Entypo
          name="trash"
          size={16}
          color={colors.yellow}
          onPress={() => handleDelete()}
        />
      ) : (
        <S.CheckBox activeOpacity={0.7} onPress={() => handlePress()}>
          {checked && <Entypo name="check" size={16} color={colors.yellow} />}
        </S.CheckBox>
      )}
      <S.Contents>
        <S.Titulo>{event.name}</S.Titulo>
        <S.Message>{event.description}</S.Message>
        <S.Date> {event.date}</S.Date>
        <S.TextNormal>Normal: R$ {event.price}</S.TextNormal>
        <S.TextAssinante>
          Assinante: R$ {event.subscriber_price}
        </S.TextAssinante>
      </S.Contents>
      <S.Image source={{ uri: img }} />

      <Alert
        visible={showModal}
        setmodalVisibility={() => setshowModal((prev) => !prev)}
        message={message}
        isError={isError}
      />
    </S.Container>
  );
}
