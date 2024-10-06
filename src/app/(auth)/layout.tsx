import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar position="block" />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
