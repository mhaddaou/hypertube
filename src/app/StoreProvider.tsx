"use client";

import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";
import AOS from 'aos';
import { useEffect } from "react";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    // AOS.init({
    //   duration: 1000, // Animation duration in milliseconds
    //   once: true, // Whether animation should happen only once or every time you scroll
    // });
    AOS.init();
  }, []);
  return <Provider store={makeStore()}>{children}</Provider>;
}
