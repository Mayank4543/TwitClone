import Body from "./component/Body";
import Toaster from "react-hot-toast";
import { useState } from "react";
function App() {
  const[state,setstate]=useSate(0)
  return (
    <>
      <Body />
      <Toaster/>
    </>
  );
}

export default App;
