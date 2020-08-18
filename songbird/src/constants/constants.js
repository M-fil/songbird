import CORRECT_SOUND_PATH from '../assets/audio/correct.mp3';
import ERROR_SOUND_PATH from '../assets/audio/error.mp3';
import WIN_SOUND_PATH from '../assets/audio/win.mp3';
import DEFAUL_BIRD_IMAGE_URL from '../assets/images/default-bird-image.png';

const urls = {
  DEFAUL_BIRD_IMAGE_URL,
  BIRDS_INFO_URL: 'https://raw.githubusercontent.com/M-fil/data-storage/master/songbird/birds.json',
  ERROR_SOUND_PATH,
  CORRECT_SOUND_PATH,
  WIN_SOUND_PATH,
};

const headerConstants = {
  SCORE_TEXT: 'Очки',
};

const loadingConstants = {
  NUMBER_OF_CIRCLES: 12,
};

const errorBlockConstants = {
  ERROR_TEXT: 'Оппс! Ошибка: ',
  ERROR_FIX_MESSAGE: 'Попробуйте перезагрузить страницу.',
};

const listOfBirds = {
  WARMING_UP: 'Разминка',
  SPARROW: 'Птицы Болот',
  FOREST_BIRDS: 'Птицы пустынь',
  SONG_BIRDS: 'Тропические птицы',
  PREDATORY_BIRDS: 'Домашние птицы',
  SEA_BIRDS: 'Африканские птицы',
};

const mainBlockConstants = {
  AUDIO_IS_NOT_SUPPORTED: 'Тег audio не поддерживается вашим браузером.',
  NEXT_BUTTON_TEXT: 'Дальше',
  NO_ASNWER_TEXT: 'Послушайте плеер. Выберите птицу из списка.',
  UNGUESSED_BIRD_NAME_TEXT: (repeatTime = 5) => '*'.repeat(repeatTime),
  MAX_DESCRITPTION_LENGTH: 250,
};

const resultsBlockConstants = {
  MAX_SCORE_FOR_SINGLE_ANSWER: 5,
  TYPES_OF_BIRDS_NUMBER: Object.values(listOfBirds).length,
  MAX_SCORE_FOR_GAME() {
    return (Object.values(listOfBirds).length) * this.MAX_SCORE_FOR_SINGLE_ANSWER;
  },
  SCORE_TEXT(score) {
    return `Набранные очки: ${score} из ${this.MAX_SCORE_FOR_GAME()}`;
  },
  PLAY_AGAIN_BUTTON_TEXT: 'Играть снова',
  FINISH_ROUND_TEXT: 'Раунд завершен!',
  ZERO_MISTAKES_TEXT: 'Урааа! Вы угадали всех птиц без единной ошибки!',
  GET_CERTIFICATE_TEXT: 'Забирайте сертификат знатока птичьих голосов!',
  DOWNLOAD_CERTIFICATE_BUTTON_TEXT: 'Скачать Сертификат',
  CERTIFICATE_DATA_TEXT: (score, birdsList) => `Поздравляем! Вы теперь настоящий знаток птичьих голосов!\nВы набрали ${score} баллов из ${resultsBlockConstants.MAX_SCORE_FOR_GAME()}.\n\nВы изуличи голоса следующих птиц:\n${birdsList}\n\nСледите за обновлениями приложения SongBird здесь: https://github.com/M-fil/songbird`,
};

export {
  headerConstants,
  listOfBirds,
  mainBlockConstants,
  urls,
  resultsBlockConstants,
  loadingConstants,
  errorBlockConstants,
};
