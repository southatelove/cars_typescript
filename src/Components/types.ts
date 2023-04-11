export interface Item {
  cardInfo?: Record<string, number | string>[];
  setCardInfo: (
    refreshCards: Record<string, number | string>[] | undefined
  ) => void;
}

// export interface Card {
//   cardInfo: Record<string, number | string>[];
//   setCardInfo: Record<string, number | string>[] | undefined;
// }
