import Navigation from "./Navigation";
import Body from "./Body";
import { useEffect, useState } from "react";
// import default from

function App() {
  const [user, setUser] = useState();

  return(
    <>
    <Navigation/>
    <Body />
    </>
  )
 
}

export default App;
