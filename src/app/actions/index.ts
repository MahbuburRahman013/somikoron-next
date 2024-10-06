import { signIn } from "next-auth/react";

interface LoginFormData {
  email: string;
  password: string;
}

export async function doCredentialLogin(formData: LoginFormData) {
  try {
    const response = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}
