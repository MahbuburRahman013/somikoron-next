import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

async function AdminPrivateComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    if (session.user.email === "mahbub@gmail.com") {
      return <div>{children}</div>;
    }
  }

  return redirect("/");
}

export default AdminPrivateComponent;
