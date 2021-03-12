export interface dataInter {
  title: string;
  id: number;
  message: string;
  edit?: boolean;
}

export type actionType =
  | { type: "ADD"; payload: dataInter }
  | { type: "CHANGE_EDIT"; payload: number }
  | { type: "EDIT_VALUE"; payload: { v: string; id: number } }
  | { type: "DELETE"; payload: number }
  | { type: "ADD_LOCAL"; payload: dataInter[] };
