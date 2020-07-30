import { urls } from '../constants/constants';

const {
  BIRDS_INFO_URL,
} = urls;

const getBirdsInfo = async () => {
  console.log('getBirdsInfo');
  const response = await fetch(BIRDS_INFO_URL);
  const data = await response.json();
  return data;
};

export default getBirdsInfo;
