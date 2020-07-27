import CORRECT_SOUND_PATH from '../assets/audio/correct.mp3'
import ERROR_SOUND_PATH from '../assets/audio/error.mp3';
import DEFAUL_BIRD_IMAGE_URL from '../assets/images/default-bird-image.png';

const urls = {
  DEFAUL_BIRD_IMAGE_URL,
  BIRDS_INFO_URL: 'https://raw.githubusercontent.com/M-fil/tasks/master/tasks/songbird/birds.json',
  ERROR_SOUND_PATH,
  CORRECT_SOUND_PATH,
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
  NO_ASNWER_TEXT: 'Послушайте плеер. Выберите птицу из списка.',
  UNGUESSED_BIRD_NAME_TEXT: (repeatTime = 5) => '*'.repeat(repeatTime),
};

const resultsBlockConstants = {
  MAX_SCORE_FOR_SINGLE_ANSWER: 5,
  MAX_SCORE_FOR_GAME() {
    return (Object.values(listOfBirds).length - 1) * this.MAX_SCORE_FOR_SINGLE_ANSWER;
  },
  SCORE_TEXT(score) {
    return `Набранные очки: ${score} из ${this.MAX_SCORE_FOR_GAME()}`;
  },
  PLAY_AGAIN_BUTTON_TEXT: 'Играть снова',
  FINISH_ROUND_TEXT: 'Раунд завершен!',
};

const fetchStatuses = {
  LOADING: 'loading',
  ERROR: 'error',
};

export {
  headerConstants,
  listOfBirds,
  mainBlockConstants,
  urls,
  resultsBlockConstants,
  fetchStatuses,
};
