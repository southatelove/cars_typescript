import { ModalT } from "./types";

const Modal = ({ modalActive, setModalActive, editCard }: ModalT) => {
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
            editCard.map((item: any) => (
              <div className="modal__editing">
                <input value={item.name} onChange={(e) => e.target.value} />
                <input value={item.model} />
                <input value={item.price} />
                <button className="modal__btn">Save</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
