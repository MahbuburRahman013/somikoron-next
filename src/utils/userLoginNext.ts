"use server";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const userLoginNext = async (formData: {
  email: string | undefined;
  password: string | undefined;
}) => {
  const { email, password } = formData;
  const token = await axios.post("http://localhost:5000/api/v1/login", {
    email,
    password,
  });

  if (token) {
    const decodedToken = jwtDecode(token.data.accessToken);
    return decodedToken;
  } else {
    throw new Error("user is not exist");
  }
};

export default userLoginNext;
