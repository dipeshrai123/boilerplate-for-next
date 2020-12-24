import { SAMPLE } from "../actions";

const initalState = {
  sampleLoader: false,
};

export function sampleReducer(state = initalState, action) {
  const { type } = action;

  switch (type) {
    case SAMPLE.LOADING:
      return { ...state, sampleLoader: true };
    case SAMPLE.SUCCESS:
      return { ...state, sampleLoader: false };
    case SAMPLE.ERROR:
      return { ...state, sampleLoader: false };

    default:
      return state;
  }
}
