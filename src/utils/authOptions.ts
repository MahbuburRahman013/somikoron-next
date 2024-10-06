import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userLoginNext from "@/utils/userLoginNext";

type FormDataType = {
  email: string | undefined;
  password: string | undefined;
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials === null) {
          return null;
        }

        try {
          const formData: FormDataType = {
            email: credentials?.email,
            password: credentials?.password,
          };
          const user = await userLoginNext(formData);
          if (user) {
            const isMatch = credentials?.email === user?.email;
            if (isMatch) {
              return user;
            } else {
              throw new Error("User not found");
            }
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  secret: "abc",
};
