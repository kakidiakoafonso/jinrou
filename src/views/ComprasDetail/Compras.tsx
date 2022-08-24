import React from "react";
import { View, Text } from "react-native";
import * as S from "./styled";
import ListItem from "../../component/DetailItem/ListItem";
import BackComponent from "../../component/Header/BackButton";
import { FlatList } from "../Eventos/styled";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../redux/rootReducer";
import {
  dispatchPurchase,
  fetchingPurchases,
  Purchase,
} from "../../redux/purchase";
import { LoadingModal } from "../../component/Loading/Loading";
import { useEventsPurchases } from "../../hooks/events";

export default function Compras() {
  const { data, isLoading } = useEventsPurchases();
  console.log("=============== useEventsPurchases ================");
  console.log(data);
  console.log("=============== useEventsPurchases ================");

  return (
    <S.Container source={require("../../assets/img/Bg8.png")}>
      <BackComponent />
      {/* <FlatList
        data={purchases}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }: { item: Purchase }) => (
          <ListItem purchases={item} />
        )}
      /> */}
      <LoadingModal visible={isLoading} />
    </S.Container>
  );
}
