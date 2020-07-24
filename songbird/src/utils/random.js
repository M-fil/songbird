const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomBirds = (birdsTypes) => birdsTypes
  .map((birds) => birds[randomInteger(0, birds.length - 1)]);

export {
  getRandomBirds,
  randomInteger,
};
