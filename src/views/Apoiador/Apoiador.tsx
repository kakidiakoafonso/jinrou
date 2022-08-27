import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Alert } from "../../component/Alert/Alert";
import Header from "../../component/Header/Header";
import KeyBoardAvoidWrapper from "../../component/KeyBoardAvoidWrapper";
import colors from "../../configs/style/colors";
import * as ImagePicker from "expo-image-picker";
import * as S from "./styled";
import { useCreateSupporter } from "../../hooks";

const img =
  "https://criticalhits.com.br/wp-content/uploads/2019/06/20190616-minato-kunai-01.jpg";
export default function Apoiador() {
  const borda = { borderBottomColor: colors.yellow, borderBottomWidth: 1 };
  const [name, setname] = useState<string>("");
  const [validation, setvalidation] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [subscriber_discount, setsubscriber_discount] = useState<string>("");
  const [image, setImage] = useState<string>(img);

  const { mutate, isLoading } = useCreateSupporter();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled && result.type == "image") {
      result.type;
      setImage(result.uri);
    }
  };

  function createSupporter() {
    const newSupporter = new FormData();
    newSupporter.append("file", {
      name: new Date() + "_profile",
      uri: image,
      type: "image",
    });

    newSupporter.append("name", name);
    newSupporter.append("description", description);
    newSupporter.append("validation", validation);
    newSupporter.append("subscriber_discount", subscriber_discount);

    mutate(newSupporter, {
      onSuccess: () => {
        setname("");
        setdescription("");
        setvalidation("");
        setsubscriber_discount("");
        setMessage("Apoiador criado com sucesso");
        setShowModal(true);
      },
      onError: () => {
        setError(true);
        setMessage("Erro ao criar apoiador");
      },
    });
  }
  return (
    <KeyBoardAvoidWrapper>
      <S.Container source={require("../../assets/img/Bg5.png")}>
        <Header />
        <S.Content>
          <S.ImageButton onPress={pickImage}>
            <S.Image source={{ uri: image }} />
          </S.ImageButton>
          <S.Nome>Nome apoiador</S.Nome>
          <S.BorderBottomView style={borda}>
            <S.Label>Nome apoiador:</S.Label>
            <S.Text
              placeholder="Nome apoiador"
              placeholderTextColor={colors.yellow}
              value={name}
              onChangeText={(text) => setname(text)}
            />
          </S.BorderBottomView>
          <S.BorderBottomView style={borda}>
            <S.Label>Descrição:</S.Label>
            <S.Text
              placeholder="Descrição"
              placeholderTextColor={colors.yellow}
              value={description}
              onChangeText={(text) => setdescription(text)}
            />
          </S.BorderBottomView>

          <S.SmallContainer>
            <S.BorderBottomViewSmall style={borda}>
              <S.Label>Validade:</S.Label>
              <S.Text
                placeholder="Validade"
                placeholderTextColor={colors.yellow}
                value={validation}
                onChangeText={(text) => setvalidation(text)}
              />
            </S.BorderBottomViewSmall>
            <S.BorderBottomViewSmall style={borda}>
              <S.Label>Desconto assinante:</S.Label>
              <S.Text
                placeholder="Desconto em %"
                placeholderTextColor={colors.yellow}
                value={subscriber_discount}
                onChangeText={(text) => setsubscriber_discount(text)}
              />
            </S.BorderBottomViewSmall>
          </S.SmallContainer>
        </S.Content>
        <S.ButtonAdd onPress={() => createSupporter()} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color={colors.yellow} />
          ) : (
            <S.AddImage source={require("../../assets/img/Add.png")} />
          )}
        </S.ButtonAdd>
        <Alert
          message={message}
          visible={showModal}
          setmodalVisibility={() => setShowModal(false)}
          isError={error}
        />
      </S.Container>
    </KeyBoardAvoidWrapper>
  );
}
