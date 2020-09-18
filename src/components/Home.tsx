import React, { FC } from "react";

export const Home: FC = () => {
  function onClick() {
    console.log("clicked")
  }
  return (
    <>
    <div>This is home</div>
    <button onClick={onClick}>click!</button>
    </>
  );
}
