import React from "react";

import delete_icon from "../icons/delete_icon.svg";
import edit_icon from "../icons/edit_icon.svg";

function MainBlock() {
  const [cardInfo, setCardInfo] = React.useState([
    {
      id: 1,
      name: "Toyota",
      model: "Camry",
      year: 2021,
      color: "red",
      price: 21000,
      latitude: 55.753215,
      longitude: 37.620393,
    },
    {
      id: 2,
      name: "Kia",
      model: "Soul",
      year: 2022,
      color: "black",
      price: 22000,
      latitude: 56.753215,
      longitude: 38.620393,
    },
    {
      id: 3,
      name: "Opel",
      model: "Astra",
      year: 2007,
      color: "Yellow",
      price: 5000,
      latitude: 57.753215,
      longitude: 39.620393,
    },
    {
      id: 4,
      name: "Ferrari",
      model: "F90",
      year: 2018,
      color: "white",
      price: 50000,
      latitude: 59.753215,
      longitude: 40.620393,
    },
    {
      id: 5,
      name: "Bugatti",
      model: "Chiron",
      year: 2020,
      color: "white",
      price: 1000000,
      latitude: 60.753215,
      longitude: 41.620393,
    },
    {
      id: 6,
      name: "Lada",
      model: "Vesta",
      year: 2020,
      color: "white",
      price: 15000,
      latitude: 70.753215,
      longitude: 45.620393,
    },
    {
      id: 7,
      name: "Mazda",
      model: "CX-5",
      year: 2010,
      color: "moonlight",
      price: 5000,
      latitude: 10.753215,
      longitude: 15.620393,
    },
  ]);

  function deleteCard(id: number) {
    let refreshCards = [...cardInfo].filter((item) => item.id !== id);
    setCardInfo(refreshCards);
  }

  return (
    <section className="main-section">
      <div className="main-section__content-container container">
        {cardInfo.map((item) => (
          <div className="content-container__card">
            <div className="card__edit-btn">
              <img src={edit_icon}></img>
              <img src={delete_icon} onClick={() => deleteCard(item.id)}></img>
            </div>
            <div className="card__img">
              <p>
                {item.name} {item.model}
              </p>
            </div>
            <div className="card__info card">
              <div className="card__name">{item.name}</div>
              <div className="card__model">{item.model}</div>
            </div>
            <div className="card__price">{item.price}</div>
            <div className="card__info color-year">
              <div className="card__color">Цвет: {item.color}</div>
              <div className="card__year">Год выпуска: {item.year}</div>
            </div>
            <div className="card__placement">Местоположение</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default MainBlock;
