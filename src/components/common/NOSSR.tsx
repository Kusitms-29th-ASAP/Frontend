import dynamic from "next/dynamic";
import React from "react";

const NOSSR: React.FC<React.PropsWithChildren> = (props) => (
  <>{props.children}</>
);

export default dynamic(() => Promise.resolve(NOSSR), {
  ssr: false,
});
