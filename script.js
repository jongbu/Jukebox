
//Object jukebox
var jukebox = {  
    //members
    name:"Thinking Out Loud",
    song: document.getElementById("audio"), //loading the audio file
    play:false, 
    //member functions
    setTitle: function(){
      this.song.volume=0.7;
      document.getElementById("songTitle").innerHTML=this.name;
    },
    playSong: function(){
      this.song.play();   
    },
    pauseSong: function(){
      this.song.pause();   
    },
    stopSong: function(){
      this.song.pause();
      this.song.currentTime=0;
    },
    backwardSong: function(){
      if(this.song.playbackRate>0.5)
        this.song.playbackRate-=0.5;
    },
    forwardSong: function(){
      if(this.song.playbackRate<2)
        this.song.playbackRate+=0.5;
    },
    volumeDown: function(){
      if(this.song.volume>0)
        this.song.volume-=0.1;
    },
    volumeUp: function(){
      if(this.song.volume<1)
        this.song.volume+=0.1;
    },
    volumeMute: function(){
        this.song.volume=0;
    }
  }

//sets the name of the song
  jukebox.setTitle();

//play the audio using jukebox object
function playAudio(){
  if(jukebox.play==false){//checks if has not been played and runs the audio as well as change the icon
    document.getElementById("play").innerHTML="<span class=\"glyphicon glyphicon-pause\"></span>";
    jukebox.play=true;
    jukebox.playSong();
  }
  else{// if played, it will pause the audio and icon changes to play for future plays
    document.getElementById("play").innerHTML="<span class=\"glyphicon glyphicon-play\"></span>";
    jukebox.play=false;
    jukebox.pauseSong();
  }
}

//stops the audio using jukebox object
function stopAudio(){
    document.getElementById("play").innerHTML="<span class=\"glyphicon glyphicon-play\"></span>";
    jukebox.play=false;
    jukebox.stopSong();
}

//backward the audio using jukebox object
function backwardAudio(){
    jukebox.backwardSong();
    document.getElementById("playSpeed").innerHTML=jukebox.song.playbackRate;
}

//forward the audio using jukebox object
function forwardAudio(){
    jukebox.forwardSong();
    document.getElementById("playSpeed").innerHTML=jukebox.song.playbackRate;
}

//to increase volume
function volDown(){
    jukebox.volumeDown();
    document.getElementById("volume").innerHTML=jukebox.song.volume.toFixed(2);
}

//to decrease volume
function volUp(){
    jukebox.volumeUp();
    document.getElementById("volume").innerHTML=jukebox.song.volume.toFixed(2);
}

//to mute volume
function mute(){
    jukebox.volumeMute();
    document.getElementById("volume").innerHTML=jukebox.song.volume;
}

//uploads the audio file and assigns the song to the jukebox object
//http://stackoverflow.com/questions/28619550/javascript-play-uploaded-audio
function playFile(obj) {
  var sound = document.getElementById('audio');
  var reader = new FileReader();
  reader.onload = (function(audio) {
    return function(e) {
              audio.src = e.target.result;
            };
          })
    (sound);
  reader.addEventListener('load', function() {
    document.getElementById("sound").play()
  });
  reader.readAsDataURL(obj.files[0]);
  stopAudio();//stopping the currently played song
  document.getElementById("songTitle").innerHTML="File Uploaded: "+obj.files[0].name;
}