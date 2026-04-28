import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FILM | BEYONDR™",
  description: "BEYONDR",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
