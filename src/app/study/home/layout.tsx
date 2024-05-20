"use client";

import Reviews from "@/components/study/review/Reviews";
import Tabbar from "@/components/common/Tabbar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Layout = (props: any) => {
  const category = useSelector((state: RootState) => state.category.value);

  return (
    <>
      {props.children}
      <Reviews category={category} />
      <Tabbar />
    </>
  );
};

export default Layout;
