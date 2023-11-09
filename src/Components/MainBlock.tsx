import { useState } from "react";

import delete_icon from "../icons/delete_icon.svg";
import edit_icon from "../icons/edit_icon.svg";

import { Modal } from "./index";

import { Item } from "./types";



export const MainBlock = ({ cardInfo, setCardInfo,loading}: Item) => {
  const [modalActive, setModalActive] = useState(false);
  const [editCard, setEditCard] = useState<Record<string, number | string>[]>();

  const deleteCard = (id: number) => {
    const refreshCards: Record<string, number | string>[] | undefined =
      cardInfo && [...cardInfo].filter((item) => item.id !== id);
    setCardInfo(refreshCards);
  };

  const editClick = (item: Record<string, number | string>) => {
    setModalActive(true);
    setEditCard([item]);
  };

  return (
    <section className="main-section">
      <div className="main-section__content-container container">
        {!loading ? <div>Идет загрузка!</div> :
        <>
        {cardInfo &&
          cardInfo.map((item: Record<string, number | string>) => (
            <div key={item.id} className="content-container__card">
              <div className="card__edit-btn">
                <img
                  src={edit_icon}
                  style={{ cursor: "pointer" }}
                  onClick={() => editClick(item)}
                ></img>
                <img
                  src={delete_icon}
                  style={{ cursor: "pointer" }}
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
            </div>
          ))}
        </>}
      </div>
      {cardInfo && !cardInfo.length && (
        <div className="container-info container">
          Данных нет, необходимо обратиться к системному администратору
        </div>
      )}
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        editCard={editCard}
        setEditCard={setEditCard}
        setCardInfo={setCardInfo}
        cardInfo={cardInfo}
      />
    </section>
  );
};
