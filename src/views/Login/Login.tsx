import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setStaff } from "../../redux/user/action";
import * as S from "./styled";
import { ActivityIndicator } from "react-native";
import { Alert } from "../../component/Alert/Alert";
import { useNavigation } from "@react-navigation/native";
import { useAuthUser, useAuthStaff } from "../../hooks";
import { Formik } from "formik";
import { LoginSchema } from "../../util/formik/validation";

export default function Login() {
  const [iStaff, setiStaff] = useState<boolean>(false);
  const [error, seterror] = useState<boolean>(false);
  const [message, setmessage] = useState<string>("");
  const [showModal, setshowModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const { navigate } = useNavigation();
  const UserAuth = useAuthUser();
  const StaffAuth = useAuthStaff();

  function handleUserLogin(formValues: Credentials) {
    const credentials: Credentials = {
      email: formValues.email,
      password: formValues.password,
    };
    UserAuth.mutate(credentials, {
      onSuccess(data, variables, context) {
        console.log(data);

        if (data?.status) {
          seterror(true);
          setmessage("Senha incorreta");
          setshowModal(true);
        }
        if (Object.keys(data).length === 0) {
          seterror(true);
          setmessage("Uusuário não cadastrado.");
          setshowModal(true);
        } else {
          seterror(false);
          setmessage("Autenticado com sucesso");
          setshowModal(true);
          setTimeout(() => {
            setshowModal(false);
            dispatch(setUser(data));
          }, 2000);
        }
      },
      onError(error, variables, context) {
        seterror(true);
        setmessage("Tente novamente!");
        setshowModal(true);
      },
    });
  }
  function handleStaffLogin(formValues: Credentials) {
    const credentials: Credentials = {
      email: formValues.email,
      password: formValues.password,
    };
    StaffAuth.mutate(credentials, {
      onSuccess(data, variables, context) {
        if (data?.status === 401) {
          seterror(true);
          setmessage("Senha incorreta");
          setshowModal(true);
        }
        if (Object.keys(data).length === 0) {
          seterror(true);
          setmessage("Uusuário não cadastrado.");
          setshowModal(true);
        }
        if (Object.keys(data).length === 8) {
          seterror(false);
          setmessage("Autenticado com sucesso");
          setshowModal(true);
          setTimeout(() => {
            setshowModal(false);
            dispatch(setStaff(data));
          }, 2000);
        }
      },
      onError(error, variables, context) {
        seterror(true);
        setmessage("Tente novamente!");
        setshowModal(true);
      },
    });
  }
  function handleSignUp() {
    navigate("UserSign");
  }

  return (
    <S.Container source={require("../../assets/img/Bg.png")}>
      <S.TopRounded>
        <S.TopRoundedImage
        // source={require("../../assets/img/YellowThing.png")}
        ></S.TopRoundedImage>
      </S.TopRounded>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => {
          // const email = value.email;
          // const password = value.password;
          const email = "kakidiako11@gmail.com";
          const password = "123456";
          if (iStaff) handleStaffLogin({ email, password });
          else handleUserLogin({ email, password });
        }}
        validationSchema={LoginSchema}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => {
          return (
            <S.ContentContainer>
              <S.InputContainer>
                <AntDesign name="user" size={24} color="#ccc" />
                <S.Input
                  placeholder="Email"
                  placeholderTextColor={"#ccc"}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  onChangeText={handleChange("email")}
                />
              </S.InputContainer>

              {errors.email && touched.email ? (
                <S.TextoError>{errors.email} erro</S.TextoError>
              ) : null}

              <S.InputContainer>
                <AntDesign name="lock" size={24} color="#ccc" />
                <S.Input
                  placeholder="Senha"
                  placeholderTextColor={"#ccc"}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  onChangeText={handleChange("password")}
                />
              </S.InputContainer>
              {errors.password && touched.email ? (
                <S.TextoError>{errors.email}</S.TextoError>
              ) : null}

              <S.ButtonEntrar
                activeOpacity={0.7}
                onPress={() => handleSubmit()}
                disabled={UserAuth.isLoading || StaffAuth.isLoading}
              >
                {UserAuth.isLoading || StaffAuth.isLoading ? (
                  <ActivityIndicator size={30} color={"#000"} />
                ) : (
                  <S.TextoEntrar>
                    Entrar {iStaff ? "como staff" : null}
                  </S.TextoEntrar>
                )}
              </S.ButtonEntrar>

              <S.ButtonStaffArea
                activeOpacity={0.7}
                onPress={() => setiStaff((prev) => !prev)}
              >
                <S.TextoStaff>
                  {!iStaff ? "Mudar para staff" : "Mudar para usuario"}
                </S.TextoStaff>
              </S.ButtonStaffArea>

              <S.TextoInfoWrapper>
                <S.TextoInfo>Não tem cadastro?</S.TextoInfo>
                <S.ButtonCadastrar activeOpacity={0.7} onPress={handleSignUp}>
                  <S.TextoInfo>Cadastrar-se</S.TextoInfo>
                </S.ButtonCadastrar>
              </S.TextoInfoWrapper>
            </S.ContentContainer>
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
  );
}
