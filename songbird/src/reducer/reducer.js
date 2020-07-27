import actionTypes from './actions';

const {
  INCREMENT_BIRD_INDEX,
  RESET_BIRD_INDEX,
  UPDATE_MAIN_SCORE,
  UPDATE_BIRDS_LIST,
  UPDATE_BIRD_ANSWERS,
} = actionTypes;

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_BIRD_INDEX:
      return {
        ...state,
        currentBirdIndex: state.currentBirdIndex + 1,
      };
    case RESET_BIRD_INDEX:
      return {
        ...state,
        currentBirdIndex: 0,
      };
    case UPDATE_MAIN_SCORE:
      return {
        ...state,
        mainScore: action.payload,
      };
    case UPDATE_BIRDS_LIST:
      return {
        ...state,
        birds: action.payload,
      };
    case UPDATE_BIRD_ANSWERS:
      return {
        ...state,
        birdAnswers: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
