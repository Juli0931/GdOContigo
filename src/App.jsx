import React from "react";
import { Carousel, Shortcut, History } from "./components";

export function App() {
  return (
    <div>
        <h1>This is a test :3</h1>
        <Carousel></Carousel>
        <Shortcut text={"Hola"}></Shortcut>
        <History></History>
    </div>
  );
}