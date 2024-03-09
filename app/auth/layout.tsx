import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Panel",
  description: "Generated by create next app and Ant Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
