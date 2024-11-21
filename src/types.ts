export interface Coin {
  coin_id: string;
  coin_name: string;
  coin_symbol: string;
  value: number;
  id: string;
}
export interface Portfolio {
  id: string;
  coin: string;
  currency: string;
  invested: number;
  profit: number;
  total: number;
}

export interface Transaction {
  coin: string;
  date: string;
  amount: number;
  price: number;
  fee: number;
  total?: number;
}

export interface CoinDocument {
  coin: string;
  totalAmount: number;
  totalPaid: number;
  transactions: [Transaction];
}

export interface CoinStats {
  coinId: string;
  percentageDifference: number;
  percentageDifferenceValue: number;
  totalPaid: number;
  userCoinValue: number;
}

export type StateTarget = "Date" | "Amount" | "Price" | "Fee";
