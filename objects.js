const playlist = new Object();

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {artistName : songTitle})
}
