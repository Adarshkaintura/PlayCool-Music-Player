let progress = document.getElementById("progress");
let songImg = document.getElementById("song-img");
let songTitle = document.getElementById("song-title");
let songArtist = document.getElementById("song-artist");
let songAudio = document.getElementById("song-audio");
let ctrlIcon = document.getElementById("ctrlIcon");

let songs = [
    {
        title: "Levitating",
        artist: "Dua Lipa Ft. Adarsh Kaintura",
        image: "pinksing.jpg",
        path: "Dua_Lipa_Levitating_Featuring_DaBaby_Official_Music_VideoMP3_160K.mp3"
    },
    {
        title: "Perfect",
        artist: "Ed-sheeran",
        image: "edsheeran.webp",
        path: "Ed Sheeran - Perfect (Lyrics)(MP3_160K).mp3"
    }
    ,
    {
        title: "Baby",
        artist: "Justin Bieber",
        image: "justin.jpg",
        path: "Justin Bieber - Baby ft. Ludacris(MP3_160K).mp3"
    }
    ,
    {
        title: "Best Song Ever",
        artist: "One Direction",
        image: "one direction.jpg",
        path: "One Direction - Best Song Ever (Audio)(MP3_160K).mp3"
    }
    ,
    {
        title: "Dusk Still down",
        artist: "Zayn Malik",
        image: "zayn.jpg",
        path: "ZAYN _ Sia - Dusk Till Dawn (Lyrics)(MP3_160K).mp3"
    }
    ,
    {
        title: "WaterMelon Sugar",
        artist: "Harry Styles",
        image: "harry.jpg",
        path: "Harry Styles - Watermelon Sugar (Lyrics)(MP3_160K).mp3"
    }
    ,
    {
        title: "Senorita",
        artist: "Camila Cabello, Shawn Mendes",
        image: "shawnmedis.webp",
        path: "Shawn_Mendes_Camila_Cabello_Señorita_Lyrics_LetraMP3_160K.mp3"
    }
    ,
    {
        title: "Raat Di Gedi",
        artist: "Dilijit Dosanjh",
        image: "dilijeet.jpeg",
        path: "Diljit_Dosanjh_Raat_Di_Gedi_Full_Audio_Neeru_Bajwa_Jatinder_Shah.mp3"
    }
    ,
    {
        title: "kabhi na kabhi",
        artist: "Aditya Narayan",
        image: "priyanshu.jpeg",
        path: "PlayCool\Kabhi_Na_Kabhi_Full_Song_Shaapit_Aditya_NarayanMP3_160K.mp3"
    }
];

let currentSongIndex = 0;

function loadSong(index) {
    let song = songs[index];
    songImg.src = song.image;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songAudio.src = song.path;
}
function playPause() {
if (songAudio.paused) {
songAudio.play();
songImg.classList.add("rotate");
ctrlIcon.classList.remove("fa-play");
ctrlIcon.classList.add("fa-pause");
} else {
songAudio.pause();
songImg.classList.remove("rotate");
ctrlIcon.classList.remove("fa-pause");
ctrlIcon.classList.add("fa-play");
}
}
songAudio.onended = function() {
songImg.classList.remove("rotate"); // Remove class to stop rotation when the song ends
};
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    songAudio.play(); // Auto play next song
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    songAudio.play(); // Auto play previous song
}

loadSong(currentSongIndex);
songAudio.onloadedmetadata = function() {
    progress.max = songAudio.duration;
    progress.value = songAudio.currentTime;
};

songAudio.ontimeupdate = function() {
    progress.value = songAudio.currentTime;
};

progress.onchange = function() {
    songAudio.currentTime = progress.value;
    if (songAudio.paused) {
        songAudio.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }

};