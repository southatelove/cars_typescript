import { useState, useEffect } from "react";
import { Header, MainBlock, Filter, Footer, Maps } from "./Components/index";

export const App = () => {
  const [cardInfo, setCardInfo] = useState<Record<string, number | string>[]>();

  useEffect(() => {
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
};
