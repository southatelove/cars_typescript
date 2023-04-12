import { useState, useEffect } from "react";
import { Header, MainBlock, Filter, Footer, Maps } from "./Components/index";

export const App = () => {
  const [cardInfo, setCardInfo] = useState<Record<string, number | string>[]>();

  useEffect(() => {
    try {
      fetch("https://tes.tspb.su/test-task/vehicles").then((response) => {
        return response.json().then((data) => {
          data && setCardInfo(data);
        });
      });
    } catch (error) {
      console.error("error in fetch get request items »", error);
    }
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
