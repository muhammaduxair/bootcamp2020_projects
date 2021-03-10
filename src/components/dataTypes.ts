export interface ShirtsInterface {
  name: string;
  url: string;
  price: number;
  add?: boolean;
  id: number;
  handleClick?: () => void;
}

export interface StateInterface {
  BasketData: ShirtsInterface[];
  CartData: ShirtsInterface[];
}

export type ActionsType =
  | {
      type: "add_shirts";
      payload: ShirtsInterface[];
    }
  | { type: "add"; payload: number }
  | { type: "delItem"; payload: { indexNumber: number; id: number } }
  | { type: "delList" };
