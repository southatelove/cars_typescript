import { IModal } from "./types";

export const Modal = ({
  modalActive,
  setModalActive,
  editCard,
  setEditCard,
  setCardInfo,
  cardInfo,
}: IModal) => {
  const saveChanges = (item: Record<string, string | number>) => {
    setModalActive(false);
    setCardInfo(
      cardInfo &&
        cardInfo.map((itemEdit) => (itemEdit.id === item.id ? item : itemEdit))
    );
  };

  return (
    <div
      className={modalActive ? "modal active" : "modal"}
      onClick={() => setModalActive(false)}
    >
      <div
        className={modalActive ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {editCard &&
            editCard.map((item) => (
              <div className="modal__editing">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    setEditCard([{ ...item, name: e.target.value }])
                  }
                />
                <input
                  type="text"
                  value={item.model}
                  onChange={(e) =>
                    setEditCard([{ ...item, model: e.target.value }])
                  }
                />
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    setEditCard([{ ...item, price: e.target.value }])
                  }
                />
                <button
                  type="submit"
                  className="modal__btn"
                  onClick={() => saveChanges(item)}
                >
                  Сохранить
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
