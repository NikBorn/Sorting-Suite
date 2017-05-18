
function charactersGen(len) {
  var text = [];
  var charset = "abcdefghijklmnopqrstuvwxyz";

  for ( var i = 0; i < len; i++ ) {
    text.push(charset.charAt(Math.floor(Math.random() * charset.length)));
  }

  return text;
}

export default charactersGen
