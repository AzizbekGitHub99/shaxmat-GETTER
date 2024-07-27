"use client";
import HeaderOne from "@/components/header-one";
import HeaderTwo from "@/components/header-two";

const { usePathname } = require("next/navigation");

const Headers = () => {
  const pathname = usePathname();
  return pathname.split("").length == 1 ? <HeaderOne /> : <HeaderTwo />;
};

export default Headers;
