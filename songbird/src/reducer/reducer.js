import actionTypes from './actions';

const {
  INCREMENT_BIRD_INDEX,
  RESET_BIRD_INDEX,
  RESET_QUESTION_INDICATOR,
  UPDATE_MAIN_SCORE,
  UPDATE_BIRDS_LIST,
  UPDATE_BIRD_ANSWERS,
  UPDATE_EVENT_DATA,
  INCREMENT_QUESTION_INDICATOR,
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
        allData: action.payload.data,
        birds: action.payload.birds,
      };
    case UPDATE_BIRD_ANSWERS:
      return {
        ...state,
        birdAnswers: action.payload,
      };
    case UPDATE_EVENT_DATA:
      return {
        ...state,
        eventData: {
          clickedId: action.payload.clickedId,
          activeBirdObject: action.payload.activeBirdObject,
        },
      };
    case INCREMENT_QUESTION_INDICATOR:
      return {
        ...state,
        currentQuestionIndicator: state.currentQuestionIndicator + 1,
      };
    case RESET_QUESTION_INDICATOR:
      return {
        ...state,
        currentQuestionIndicator: 0,
      };
    default:
      return state;
  }
};

export default reducer;
