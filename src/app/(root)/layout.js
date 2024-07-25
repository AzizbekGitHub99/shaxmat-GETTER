import { Fragment } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Shaxmat Federatsiyasi | GETTER",
  description: "Federation",
};

export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
