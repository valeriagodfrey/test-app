export type State = {
  email: string;
  name: string;
  patronymic: string;
  surname: string;
  password: string;
  password2: string;
  day: number;
  month: string;
  year: number;
  number: number;
  gender: string;
  check: boolean;
};
export type User = {
  email: string;
  password: string;
};

export type Action =
  | { type: "SIGN_UP"; payload: State }
  | {
      type: "SIGN_IN";
      payload: User;
    }
  | { type: "CHANGE_PASSWORD"; payload: string };
const initialState = {
  user: [],
};
export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: action.payload,
      };
  }
};
