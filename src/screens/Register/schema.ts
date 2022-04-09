import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required('campo obrigatório'),
  website: yup.string().required('campo obrigatório'),
  user: yup.string().required('campo obrigatório'),
  password: yup.string().required('campo obrigatório'),
})