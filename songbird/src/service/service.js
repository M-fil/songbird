import { urls } from '../constants/constants';

const {
  BIRDS_INFO_URL,
} = urls;

const getBirdsInfo = async () => {
  const response = await fetch(BIRDS_INFO_URL);
  const data = await response.json();
  return data;
};

export default getBirdsInfo;
