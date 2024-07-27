import { Fragment } from "react";
import Headers from "@/components/Headers";
import Footer from "@/components/Footer";

import "../globals.css"

export const metadata = {
  title: "Shaxmat Federatsiyasi | GETTER",
  description: "Federation",
};

export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Headers />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
