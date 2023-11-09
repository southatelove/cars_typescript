export interface Item {
  cardInfo?: Record<string, number | string>[];
  setCardInfo: (
    refreshCards: Record<string, number | string>[] | undefined
  ) => void;
  loading:boolean;
}
export interface IModal {
  modalActive: boolean;
  setModalActive: (e: boolean) => void;
  setEditCard: (e: Record<string, string | number>[] | undefined) => void;
  setCardInfo: (e: Record<string, string | number>[] | undefined) => void;
  cardInfo?: Record<string, number | string>[];
  editCard?: Record<string, number | string>[];
}
