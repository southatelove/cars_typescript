import React from "react";

import delete_icon from "../icons/delete_icon.svg";
import edit_icon from "../icons/edit_icon.svg";

import Modal from "./Modal";

import { Item } from "./types";

const MainBlock = ({ cardInfo, setCardInfo }: Item) => {
  function deleteCard(id: number) {
    const refreshCards: Record<string, number | string>[] | undefined =
      cardInfo && [...cardInfo].filter((item) => item.id !== id);
    setCardInfo(refreshCards);
  }

  // const editName = (id: string | number) => {
  //   console.log("Я ", id);
  // };
  const editClick = (item: Record<string, number | string>) => {
    setModalActive(true);
    setEditCard([item]);
  };

  const [modalActive, setModalActive] = React.useState(false);
  const [editCard, setEditCard] =
    React.useState<Record<string, number | string>[]>();
  return (
    <section className="main-section">
      <div className="main-section__content-container container">
        {cardInfo &&
          cardInfo.map((item: Record<string, number | string>) => (
            <div key={item.id} className="content-container__card">
              <div className="card__edit-btn">
                <img src={edit_icon} onClick={() => editClick(item)}></img>
                <img
                  src={delete_icon}
                  onClick={() => deleteCard(item.id as number)}
                ></img>
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
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        editCard={editCard}
      />
    </section>
  );
};
export default MainBlock;
