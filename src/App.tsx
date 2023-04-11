import React from "react";

import Header from "./Components/Header";
import MainBlock from "./Components/MainBlock";
import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import { Maps } from "./Components/Maps";

function App() {
  const [cardInfo, setCardInfo] =
    React.useState<Record<string, number | string>[]>();

  React.useEffect(() => {
    fetch("https://test.tspb.su/test-task/vehicles").then((response) => {
      return response.json().then((data) => {
        data && setCardInfo(data);
      });
    });
  }, []);

  return (
    <>
      <Header />
      <Filter cardInfo={cardInfo} setCardInfo={setCardInfo} />
      <MainBlock cardInfo={cardInfo} setCardInfo={setCardInfo} />
      <Maps cardInfo={cardInfo} />
      <Footer />
    </>
  );
}

export default App;
