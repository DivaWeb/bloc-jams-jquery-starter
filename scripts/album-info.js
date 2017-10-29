$(document).ready(function(){
  //title
   $('#album-title').text(album.title);
   //album art
   $('img#ablum-cover-art').attr('src', album.albumArtUrl);
   //artist
   $('.artist').text(album.artist);
   //release info
   $('#release-info').text(album.releaseInfo);
   
});
