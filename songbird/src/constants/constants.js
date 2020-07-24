const ulrs = {
  DEFAUL_BIRD_IMAGE_URL: './src/assets/images/default-bird-image.png',
};

const headerConstants = {
  SCORE_TEXT: 'Очки',
};

const listOfBirds = {
  WARMING_UP: 'Разминка',
  SPARROW: 'Воробьиные',
  FOREST_BIRDS: 'Лесные птицы',
  SONG_BIRDS: 'Певчие птицы',
  PREDATORY_BIRDS: 'Хищные птицы',
  SEA_BIRDS: 'Морские птицы',
};

const mainBlockConstants = {
  AUDIO_IS_NOT_SUPPORTED: 'Тег audio не поддерживается вашим браузером.',
  NEXT_BUTTON_TEXT: 'Дальше',
  NO_ASNWER_TEXT: 'Послушайте плеер. Выберите птицу из списка',
};

const resultsBlockConstants = {
  MAX_SCORE_FOR_SINGLE_ANSWER: 5,
  MAX_SCORE_FOR_GAME: (Object.values(listOfBirds).length - 1) * this.MAX_SCORE_FOR_SINGLE_ANSWER,
  SCORE_TEXT: (score, maxScore = this.MAX_SCORE_FOR_GAME) => `Набранные очки: ${score} из ${maxScore}`,
  PLAY_AGAIN_BUTTON_TEXT: 'Играть снова',
};

export {
  headerConstants,
  listOfBirds,
  mainBlockConstants,
  ulrs,
  resultsBlockConstants,
};
