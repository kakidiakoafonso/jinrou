import React from "react";
import { View, Text } from "react-native";
import * as S from "./styled";
import ListItem from "../../component/DetailItem/ListItem";
import BackComponent from "../../component/Header/BackButton";
import { FlatList } from "../Eventos/styled";
import { LoadingModal } from "../../component/Loading/Loading";
import { useEventsPurchases } from "../../hooks/events";

export default function Compras() {
  const { data, isLoading } = useEventsPurchases();
  return (
    <S.Container source={require("../../assets/img/Bg8.png")}>
      <BackComponent />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }: { item: Evento }) => <ListItem evento={item} />}
      />
      <LoadingModal visible={isLoading} />
    </S.Container>
  );
}
