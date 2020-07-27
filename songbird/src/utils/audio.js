const playAudio = (source, audio) => {
  console.log('audio', audio);
  console.log('source', source);
  const { src, ended } = audio;

  if (src === '' || src !== source || ended) {
    audio.src = source;
    audio.play();
  }
};

export default playAudio;
