import React from "react";
import DefaultHeader from "../Common/Header";
import DefaultFooter from "../Common/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DefaultHeader />
      {children}
      <DefaultFooter />
    </div>
  );
}
