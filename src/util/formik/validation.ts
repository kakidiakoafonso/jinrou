import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Senha curta!")
    .required("Campo senha está vazia"),
  email: Yup.string()
    .email("Email inválido!")
    .required("Campo email está vazia"),
});
export const createUserSchema = Yup.object().shape({
  name: Yup.string().min(6, "Nome curto!").required("Campo nome está vazia"),
  birth_day: Yup.string()
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Seguir formato DD/MM/AAAA")
    .required("Campo Aniversario está vazio!"),
  password: Yup.string()
    .min(6, "Senha curta!")
    .required("Campo senha está vazia"),
  cpf: Yup.string().min(8, "CPF inválido!").required("Campo CPF está vazia"),
  rg: Yup.string().min(8, "RG inválido!").required("Campo senha está vazia"),
  email: Yup.string()
    .email("Email inválido!")
    .required("Campo email está vazia"),
});
export const updateUserSchema = Yup.object().shape({
  name: Yup.string().min(6, "Nome curto!").required("Campo nome está vazia"),
  birth_day: Yup.string()
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Seguir formato DD/MM/AAAA")
    .required("Campo Aniversario está vazio!"),
  password: Yup.string()
    .min(6, "Senha curta!")
    .required("Campo senha está vazia"),
});
