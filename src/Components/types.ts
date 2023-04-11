export interface Item {
  cardInfo?: Record<string, number | string>[];
  setCardInfo: (
    refreshCards: Record<string, number | string>[] | undefined
  ) => void;
}

export interface ModalT {
  modalActive: boolean;
  setModalActive: (e: boolean) => void;
  children: JSX.Element;
}
