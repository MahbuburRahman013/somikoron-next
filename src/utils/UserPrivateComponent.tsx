import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

async function UserPrivateComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    if (session.user.email) {
      return <div>{children}</div>;
    }
  }

  return redirect("/");
}

export default UserPrivateComponent;
