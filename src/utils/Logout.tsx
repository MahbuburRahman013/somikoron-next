"use client";
import { signOut } from "next-auth/react";
import React from "react";

function LogoutButton() {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="font-semibold px-5 py-2 bg-black border rounded-md border-gray-600"
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
