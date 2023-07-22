import { createContext, useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import RasApp from "./components/rasApp/RasApp";
import Business from "./components/business/Business";
import ForBusiness from "./components/forbusiness/ForBusiness";
import Future from "./components/future/Future";
import Footer from "./components/Footer/Footer";
export const bgContext = createContext();
function App() {
  const [bgColor, setBgColor] = useState({
    bgColor: "#141313",
    color: "#ffffff55",
  });
  return (
    <>
      <bgContext.Provider value={{ bgColor, setBgColor }}>
        <Header />
        <Hero />
        <RasApp />
        <Business />
        <ForBusiness />
        <Future />
        <Footer />
      </bgContext.Provider>
    </>
  );
}

export default App;
