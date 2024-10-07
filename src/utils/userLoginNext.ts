"use server";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";

const userLoginNext = async (formData: {
  email: string | undefined;
  password: string | undefined;
  name?: string | undefined;
}) => {
  // const { email, password , name} = formData;
  // const token = await axios.post(
  //   "https://somikoron-backend.vercel.app/api/v1/login",
  //   {
  //     email,
  //     password,
  //   }
  // );

  if (formData.email) {
    // const decodedToken = jwtDecode(token.data.accessToken);
    // return decodedToken;
    return formData;
  } else {
    throw new Error("user is not exist");
  }
};

export default userLoginNext;
