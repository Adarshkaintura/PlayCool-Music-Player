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
        image: "media/pinksing.jpg",
        path: "media/Dua_Lipa_Levitating_Featuring_DaBaby_Official_Music_VideoMP3_160K.mp3"
    },
    {
        title: "Perfect",
        artist: "Ed-sheeran",
        image: "media/edsheeran.webp",
        path: "media/Ed Sheeran - Perfect (Lyrics)(MP3_160K).mp3"
    }
    ,
    {
        title: "Baby",
        artist: "Justin Bieber",
        image: "media/justin.jpg",
        path: "media/Justin Bieber - Baby ft. Ludacris(MP3_160K).mp3"
    }
    ,
    {
        title: "Best Song Ever",
        artist: "One Direction",
        image: "media/one direction.jpg",
        path: "media/One Direction - Best Song Ever (Audio)(MP3_160K).mp3"
    }
    ,
    {
        title: "Dusk Still down",
        artist: "Zayn Malik",
        image: "media/zayn.jpg",
        path: "media/ZAYN _ Sia - Dusk Till Dawn (Lyrics)(MP3_160K).mp3"
    }
    ,
    {
        title: "WaterMelon Sugar",
        artist: "Harry Styles",
        image: "media/harry.jpg",
        path: "media/Harry Styles - Watermelon Sugar (Lyrics)(MP3_160K).mp3"
    }
    ,
    {
        title: "Senorita",
        artist: "Camila Cabello, Shawn Mendes",
        image: "media/shawnmedis.webp",
        path: "media/Shawn_Mendes_Camila_Cabello_Señorita_Lyrics_LetraMP3_160K.mp3"
    }
    ,
    {
        title: "Raat Di Gedi",
        artist: "Dilijit Dosanjh",
        image: "media/dilijeet.jpeg",
        path: "media/Diljit_Dosanjh_Raat_Di_Gedi_Full_Audio_Neeru_Bajwa_Jatinder_Shah.mp3"
    }
    ,
    {
        title: "kabhi na kabhi",
        artist: "Aditya Narayan",
        image: "media/priyanshu.jpeg",
        path: "media/Kabhi_Na_Kabhi_Full_Song_Shaapit_Aditya_NarayanMP3_160K.mp3"
    },
    {
        title: "Ankhon Mein Teri",
        artist: "KK",
        image: "media/Shardeep.avif",
        path: "media/Aankhon_Mein_Teri_Ajab_Si_Lyrical_Om_Shanti_Om_K_K_Shahrukh_Khan.mp3"
    },
    {
        title: "Say to Yes to the Dress",
        artist: "Baadshah",
        image: "media/sajnaterliye.jpg",
        path: "media/Badshah_Sajna_Say_Yes_To_The_Dress_Official_Video_Payal_DevMP3_160K.mp3"
    },
    {
        title: "Satranga",
        artist: "kk",
        image: "media/satranga.webp",
        path: "media/What_if_SATRANGA_was_KK_s_song_4th_White_Fauzan_Raees_AI_CoverMP3.mp3"
    },
    {
        title: "Teri Jhuki Nazar",
        artist: "Shafqat Amanat Ali, Pritam Chakraborty",
        image: "media/terijhuki.jpg",
        path: "media/teri jhuki nazar song lyrics shafqat Amanat Ali(MP3_160K).mp3"
    }
    ,
    {
        title: "Tera Fitoor",
        artist: "Arijit Singh",
        image: "media/tereafitto.jpg",
        path: "media/Tera_Fitoor_Lyrical_Genius_Utkarsh_Sharma_Ishita_Chauhan_Arijit.mp3"
    }
    ,
    {
        title: "Sawariyan",
        artist: "Astha Gill",
        image: "media/sawariya.jpg",
        path: "media/Saawariya_Dance_Cover_Aastha_Gill_Sonal_Devraj_shortsMP3_160K.mp3"
    }
    ,
    {
        title: "Night Changes X Shayad",
        artist: "One Direction X Arijit Singh",
        image: "media/shayadNi.jpg",
        path: "media/Night_Changes_x_Shayad_slowed_reverb_Tiktok_VersionMP3_160K.mp3"
    }
    ,
    {
        title: "Bloody Mary",
        artist: "Lady Gaga",
        image: "media/batman.jpeg",
        path: "media/Lady Gaga - Bloody Mary (Official Audio)(MP3_160K).mp3"
    }
    ,
    {
        title: "Derniere Danse",
        artist: "Indila",
        image: "media/indilim.jpeg",
        path: "media/Indila - Dernière Danse (Clip Officiel)(MP3_320K).mp3"
    }
    ,
    {
        title: "Har funn Maula",
        artist: "Vishal",
        image: "media/gojopink.jpg",
        path: "media/Har_Funn_Maula_Video_Song_Koi_Jaane_Na_Aamir_Khan_Elli_A_Vishal.mp3"
    }
    ,
    {
        title: "Animal",
        artist: "Maroon 5",
        image: "media/maroonanima.jpg",
        path: "media/Glass_Animals_Heat_Waves_Slowed_TikTokLyrics_sometimes_all_i_think.mp3"
    }
    ,
    {
        title: "Khairiyat",
        artist: "Arijit Singh",
        image: "media/khariyat.jpg",
        path: "media/Full_Song_KHAIRIYAT_BONUS_TRACK_CHHICHHORE_Sushant_Shraddha_Pritam.mp3"
    }
    ,
    {
        title: "Cupid",
        artist: "I don't know",
        image: "media/cupid.jpg",
        path: "media/fifty_fifty_cupid_english_ver_slowed_reverbMP3_160K.mp3"
    }
    ,
    {
        title: "Rangili Pichodi",
        artist: " Priyanka Meher",
        image: "media/pichodi.jpeg",
        path: "media/dwarahat ko lehenga mero rangili pichodi(MP3_160K).mp3"
    }
    ,
    {
        title: "California Love",
        artist: "Gur Sidhu",
        image: "media/california.jpeg",
        path: "media/CALIFORNIA_LOVE_Official_Video_Cheema_Y_Gur_Sidhu_New_Punjabi_Song.mp3"
    }
    ,
    {
        title: "Baawala",
        artist: "Baadshah",
        image: "media/baawla.jpg",
        path: "media/Badshah_Baawla_Uchana_Amit_Ft_Samreen_Kaur_Saga_Music_Music_Video.mp3"
    }
    ,
    {
        title: "Channa Mereya",
        artist: "Arijit Singh",
        image: "media/channamere.jpg",
        path: "media/Arijit_Singh_Channa_Mereya_lyrics_Ae_Dil_Hai_MushkilMP3_160K.mp3"
    }
    ,
    {
        title: "Apna Bana le",
        artist: "Sachin Jigar,Arijit Singh",
        image: "media/apnaba.jpg",
        path: "media/Apna_Bana_Le_Bhediya_Varun_Dhawan_Kriti_Sanon_Sachin_Jigar_Arijit.mp3"
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