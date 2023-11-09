import { useState, useEffect } from "react";
import { Header, MainBlock, Filter, Footer, Maps } from "./Components/index";
import { log } from "console";

export const App = () => {
  const [cardInfo, setCardInfo] = useState<Record<string, number | string>[]>();

  const [loading,setLoading] = useState<boolean>(false)

  const changeLoad =()=>{
    setLoading(true)
  }

  useEffect(() => {
    setLoading(false)
    try {
      fetch("https://test.tspb.su/test-task/vehicles").then((response) => {
        return response.json().then((data) => {
          data && setCardInfo(data);
          changeLoad()
          console.log("Я загрузился");
        });
      });
    } catch (error) {
      console.error("error in fetch get request items »", error);
    }
  }, []);

  return (
    <>
      <Header />
      <Filter cardInfo={cardInfo} setCardInfo={setCardInfo} loading={loading}/>
      <MainBlock cardInfo={cardInfo} setCardInfo={setCardInfo} loading={loading} />
      <Maps cardInfo={cardInfo} />
      <Footer />
    </>
  );
};
