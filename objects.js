var playlist = new Object({ Devo: 'Whip It'});

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {artistName : songTitle})
}
