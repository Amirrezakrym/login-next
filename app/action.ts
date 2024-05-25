

import * as yup from "yup";

export const Userschema = yup.object({
  name: yup
    .string()
    .min(4)
    .max(20)
    .oneOf(["Amirreza"],"the name is wrong")
    .required("User name is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup
    .string()
    .min(8)
    .max(128)
    .required("Password is required")
    .matches(/[a-z]/)
    .matches(/[A-Z]/)
    .matches(/[0-9]/)
    .matches(/[!@#$%^&*()_+={}[]|:;'<>,.?\/]/,),
});






































// export async function login(message: any, formData: FormData) {



    // let formdata = {
  //   name: formData.get("name"),
  //   email: formData.get("email"),
  //   password: formData.get("password"),
  // };

  // const isValid = await schema.isValid(formdata);
  // console.log(isValid);

  // if(email === "" && password === ""){

  //   return ("Input email and password are empty!");

  // }else if(email === ""){

  //   return ("Email input is empty!")

  // }else if(password === ""){

  //   return ("Password input is empty!")

  // }else{

  //    return (`Your email : ${email}  Your password : ${password}`);

  // }
// }
