import {FETCH_MOCK_COMMENTS} from "../../actions/types";

const initialState = {
  mockComments: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOCK_COMMENTS:
      console.log(action.payload.data);
      return Object.assign({}, state, {
        mockComments: action.payload.data,
      });
  }
  return state;
}