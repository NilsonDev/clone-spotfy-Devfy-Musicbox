const discLayers = [
    { id: 'disco1', musicFile: './assets/bk-music/Popcorn.mp3' },
    { id: 'disco2', musicFile: 'musica2.mp3' },
    { id: 'disco3', musicFile: 'musica3.mp3' },
    // ...
  ];
  discLayers.forEach((disc) => {
    const discElement = document.getElementById(disc.id);
    discElement.addEventListener('click', () => {
      const audio = new Audio(`musica/${disc.musicFile}`);
      audio.play();
    });
  });