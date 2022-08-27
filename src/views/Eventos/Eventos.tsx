import React, { useContext, useEffect, useState } from "react";
import * as S from "./styled";
import cores from "../../configs/style/colors";
import { Ionicons } from "@expo/vector-icons";
import ListItem from "../../component/Item/ListItem";
import { useNavigation } from "@react-navigation/native";
import { useGetEvents } from "../../hooks/events";

export default function EventosList() {
  const nav = useNavigation();
  const { data: events, isLoading } = useGetEvents();

  return (
    <S.Container source={require("../../assets/img/Bg4.png")}>
      <S.Header>
        <S.BackIcon onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back-outline" size={44} color={cores.yellow} />
        </S.BackIcon>
      </S.Header>

      <S.FlatList
        data={events}
        keyExtractor={(e) => String(e.id)}
        renderItem={({ item }: { item: Evento }) => <ListItem event={item} />}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}
