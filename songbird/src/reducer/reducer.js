import actionTypes from './actions';
import shuffle from '../utils/shuffle';

const {
  INCREMENT_BIRD_INDEX,
  RESET_BIRD_INDEX,
  RESET_QUESTION_INDICATOR,
  UPDATE_MAIN_SCORE,
  UPDATE_BIRDS_LIST,
  UPDATE_BIRD_ANSWERS,
  UPDATE_EVENT_DATA,
  INCREMENT_QUESTION_INDICATOR,
  CHANGE_IS_CLICKED_OF_BIRD_ANSWER,
  DECREMENT_CURRENT_SCORE,
  RESET_CURRENT_SCORE,
  RESET_MAIN_SCORE,
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
        mainScore: state.mainScore + state.currentScore,
      };
    case RESET_MAIN_SCORE:
      return {
        ...state,
        mainScore: 0,
      };
    case UPDATE_BIRDS_LIST:
      return {
        ...state,
        allData: action.payload.data,
        birds: action.payload.birds,
      };
    case UPDATE_BIRD_ANSWERS: {
      return {
        ...state,
        birdAnswers: shuffle(action.payload).map((answer) => ({
          ...answer,
          isClicked: false,
        })),
      };
    }
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
    case CHANGE_IS_CLICKED_OF_BIRD_ANSWER:
      return {
        ...state,
        birdAnswers: state.birdAnswers
          .map((answer) => (`${answer.name}-${answer.id}` === state.eventData.clickedId
            ? { ...answer, isClicked: true }
            : answer
          )),
      };
    case DECREMENT_CURRENT_SCORE:
      return {
        ...state,
        currentScore: state.currentScore - 1,
      };
    case RESET_CURRENT_SCORE:
      return {
        ...state,
        currentScore: 5,
      };
    default:
      return state;
  }
};

export default reducer;
