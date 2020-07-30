const initialState = {
  status: {
    isLoading: false,
    isError: false,
    errorMessage: '',
  },
  allData: null,
  birdAnswers: [],
  birds: [],
  currentBirdIndex: 0,
  currentQuestionIndicator: 0,
  mainScore: 0,
  currentScore: 5,
  eventData: {
    clickedId: '',
    activeBirdObject: null,
  },
};

export default initialState;
