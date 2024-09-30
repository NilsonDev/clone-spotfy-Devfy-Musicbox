document.addEventListener('DOMContentLoaded', () => {
    const albumsData = [
        { name: "Flash Back Pop Corn", artist: "Pop Corn", image: "./assets/popcorn.png", music: "assets/bk-music/popcorn.mp3" },
        { name: "X Pone feat. Queen Regina - Stranger In Paradise", artist: "Regina", image: "./assets/xpone.png", music: "assets/bk-music/xpone.mp3" },
        { name: "Single Erasure", artist: "Erasure", image: "./assets/erasure.png", music:"./assets/bk-music/erasure.mp3" },
        { name: "Single Sharking Steve", artist: "Sharking Steve", image: "./assets/shakinsteve.png", music: "assets/bk-music/shakin.mp3" },
        { name: "Remix Pingos de Amor", artist: "Sampa Crew", image: "./assets/sampacrew.png", music: "assets/bk-music/sampa.mp3" },
    ];

    const artistsData = [
        { name: "Artaria, Jean Vayat - Sun Is Setting (Feat. Evelynka)", image: "./assets/artaria.jpg", music: "assets/bk-music/artaria.mp3" },
        { name: "Solomun - Clap Your Hands Remix", image: "./assets/clap-your-hands.jpg", music: "assets/bk-music/solomun.mp3" },
        { name: "Dsepeche Mode - Cover Me [Dixon Remix]", image: "./assets/cover-me.jpg", music: "assets/bk-music/depeche.mp3" },
        { name: "Detmolt - Go Away", image: "./assets/detmolt.jpg", music: "assets/bk-music/detmolt.mp3" },
        { name: "Filme The Commitments", image: "./assets/commitments.jpg", music: "assets/bk-music/commitments.mp" }
    ];


    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')
    const musicPlayer = document.getElementById('music-player')


    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')
        artistCard.innerHTML =
            `
        <img src="${artist.image}" alt="imagen do ${artist.name}">
        <h3>${artist.name}</h3>
        <p>artista</p>
                
        `
        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach(album => {
        const albumsCard = document.createElement('div')
        albumsCard.classList.add('album-card')
        albumsCard.innerHTML =
            `
        <img src="${album.image}" alt="imagen do ${album.name}">
        <h3>${album.name}</h3>
        
                
        `
        albumsGrid.appendChild(albumsCard)

        // Adicione um evento de clique à imagem do álbum
        const albumImage = albumsCard.querySelector('img')
        albumImage.addEventListener('click', () => {
            try {
                // Reproduza a música correspondente
                musicPlayer.src = album.music
                musicPlayer.play()
            } catch (error) {
                console.error(`Error playing music: ${error.message}`)
            }
        })
    })
})