import React, { FC } from "react";

export const Home: FC<{ text: string }> = ({ text }) => {
  return (
    <>
    <div>{text}</div>
    <button onClick={() => console.log("clicked.")}>click!</button>
    </>
  );
}
