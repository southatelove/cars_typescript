export interface Item {
  cardInfo?: Record<string, number | string>[];
  setCardInfo: (
    refreshCards: Record<string, number | string>[] | undefined
  ) => void;
}

export interface ModalT {
  modalActive: boolean;
  setModalActive: (e: boolean) => void;
  editCard: any;
}
// JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

// export interface carName extends EventTarget {
//   carName: string;
//   setCarName: string;
// }
