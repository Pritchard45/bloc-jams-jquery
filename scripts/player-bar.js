//checkpointwork

{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
    //added total time
    $('#time-control .total-time').text( player.currentlyPlaying.duration);

  });

  $('button#next').on('click', function(){
    if(player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length){ return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
    //added total time
    $('#time-control .total-time').text( nextSong.duration);
  });
//sliders
  $('#time-control input').on('input', function (event){
    player.skipTo(event.target.value);
  });
//sliders
  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( currentTime );
    $('#time-control input').val(percent);
  }, 1000);
//assignment event handler
  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });
  //assignment
    $('button#previous').on('click', function(){
      if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const previousSongIndex = currentSongIndex - 1;
      if (previousSongIndex >= album.songs.length) { return; }


      const previousSong = album.songs[previousSongIndex];
      player.playPause(previousSong);
      //added total time
      $('#time-control .total-time').text( previousSong.duration );
    });
//both buttons work.
}
