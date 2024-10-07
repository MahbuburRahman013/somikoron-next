"use server";
import axios from "axios";
import { cookies } from "next/headers";

const userLogin = async (formData: { email: string; password: string }) => {
  const cookieStore = cookies();

  const { email, password } = formData;
  const token = await axios.post(
    "https://somikoron-backend.vercel.app/api/v1/login",
    {
      email,
      password,
    }
  );

  if (token.data) {
    cookieStore.set("userToken", token.data.accessToken);
    return cookieStore.get("userToken");
  }
};

export default userLogin;
