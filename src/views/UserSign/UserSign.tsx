import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import colors from "../../configs/style/colors";
import * as S from "./styled";
import { Formik } from "formik";
import { useCreateUser } from "../../hooks";
import { createUserSchema } from "../../util/formik/validation";
import { ValidaThor } from "../../component/validation";
import { Alert } from "../../component/Alert/Alert";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/action";
import KeyBoardAvoidWrapper from "../../component/KeyBoardAvoidWrapper/index";

type FormikValue = {
  email: string;
  name: string;
  password: string;
  rg: string;
  cpf: string;
  birth_day: string;
  avatar: string;
};
const initialFoto =
  "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-24.jpg";
export function UserSign() {
  const borda = { borderBottomColor: colors.yellow, borderBottomWidth: 1 };
  const dispatch = useDispatch();
  const { mutate, isLoading } = useCreateUser();
  const [avatar, setavatar] = useState<string>(initialFoto);
  const [error, seterror] = useState<boolean>(false);
  const [message, setmessage] = useState<string>("");
  const [showModal, setshowModal] = useState<boolean>(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled && result.type == "image") {
      result.type;
      setavatar(result.uri);
    }
  };

  function handleCreateUser(values: FormikValue) {
    const userInfo: FormData = new FormData();
    userInfo.append("name", values.name);
    userInfo.append("rg", values.rg);
    userInfo.append("email", values.email);
    userInfo.append("password", values.password);
    userInfo.append("cpf", values.cpf);
    userInfo.append("birth_day", values.birth_day);
    if (avatar !== initialFoto) {
      userInfo.append("file", {
        name: new Date() + "_profile",
        uri: avatar,
        type: "image",
      });
    }

    console.log("========== mutate out =========");
    console.log(userInfo);
    mutate(userInfo, {
      onError(error) {
        console.log("============== Error ======================");
        console.log(error);
        seterror(true);
        setmessage("Tente novamente!");
        setshowModal(true);
      },
      onSuccess(data, context) {
        console.log("============== Sucess ======================");
        console.log(data);
        seterror(false);
        setmessage("Autenticado com sucesso");
        setshowModal(true);
        setTimeout(() => {
          setshowModal(false);
          dispatch(setUser(data));
        }, 2000);
      },
    });
  }

  return (
    <KeyBoardAvoidWrapper>
      <S.Container source={require("../../assets/img/Bg5.png")}>
        <Formik
          initialValues={{
            email: "",
            name: "",
            password: "",
            rg: "",
            cpf: "",
            birth_day: "",
          }}
          validationSchema={createUserSchema}
          onSubmit={(values) => {
            handleCreateUser(values as FormikValue);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => {
            return (
              <React.Fragment>
                <S.Header />
                <S.Content>
                  <S.AvatarButton onPress={pickImage}>
                    <S.Image source={{ uri: avatar }} />
                  </S.AvatarButton>
                  <S.BorderBottomView style={borda}>
                    <S.Label>Nome:</S.Label>
                    <S.Input
                      placeholder="Nome"
                      value={values.name}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                    />
                  </S.BorderBottomView>
                  {errors.name && touched.name && (
                    <ValidaThor message={errors.name} />
                  )}
                  <S.BorderBottomView style={borda}>
                    <S.Label>Email:</S.Label>
                    <S.Input
                      placeholder="Email"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                    />
                  </S.BorderBottomView>
                  {errors.email && touched.email && (
                    <ValidaThor message={errors.email} />
                  )}
                  <S.BorderBottomView style={borda}>
                    <S.Label>CPF:</S.Label>
                    <S.Input
                      placeholder="CPF"
                      value={values.cpf}
                      onChangeText={handleChange("cpf")}
                      onBlur={handleBlur("cpf")}
                      keyboardType="numeric"
                    />
                  </S.BorderBottomView>
                  {errors.cpf && touched.cpf && (
                    <ValidaThor message={errors.cpf} />
                  )}
                  <S.BorderBottomView style={borda}>
                    <S.Label>RG:</S.Label>
                    <S.Input
                      placeholder="RG"
                      value={values.rg}
                      onChangeText={handleChange("rg")}
                      onBlur={handleBlur("rg")}
                    />
                  </S.BorderBottomView>
                  {errors.rg && touched.rg && (
                    <ValidaThor message={errors.rg} />
                  )}

                  <S.SmallContainer>
                    <S.BorderBottomViewSmall style={borda}>
                      <S.Label>Aniversario:</S.Label>
                      <S.Input
                        placeholder="Aniversario"
                        value={values.birth_day}
                        onChangeText={handleChange("birth_day")}
                        onBlur={handleBlur("birth_day")}
                      />
                    </S.BorderBottomViewSmall>
                  </S.SmallContainer>
                  {errors.birth_day && touched.birth_day && (
                    <ValidaThor message={errors.birth_day} />
                  )}
                  <S.BorderBottomView style={borda}>
                    <S.Label>Senha:</S.Label>
                    <S.Input
                      placeholder="Senha"
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                    />
                  </S.BorderBottomView>
                  {errors.password && touched.password && (
                    <ValidaThor message={errors.password} />
                  )}
                </S.Content>

                <S.ButtonAdd
                  onPress={() => handleSubmit()}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator size="small" color={colors.yellow} />
                  ) : (
                    <S.ImageAdd source={require("../../assets/img/Add.png")} />
                  )}
                </S.ButtonAdd>
              </React.Fragment>
            );
          }}
        </Formik>
        <Alert
          message={message}
          isError={error}
          visible={showModal}
          isLogin={true}
          setmodalVisibility={() => setshowModal(false)}
        />
      </S.Container>
    </KeyBoardAvoidWrapper>
  );
}
